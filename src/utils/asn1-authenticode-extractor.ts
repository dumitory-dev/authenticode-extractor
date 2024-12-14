//@ts-ignore
import { ASN1 } from '@lapo/asn1js'
import { IAuthenticodeExtractor } from '../types/types'

interface ASN1Value {
  typeName(): string
  content(): string | null
  sub: ASN1Value[] | null
}

interface DefType {
  name?: string
  type?: DefType | { type: DefType } | 'defined'
  content?: DefType[]
  typeOf?: boolean
}

export class Asn1AuthenticodeExtractor implements IAuthenticodeExtractor {
  private readonly data: Uint8Array

  constructor(fileData: Uint8Array) {
    this.data = fileData
  }

  public getInfo(): Uint8Array {
    try {
      const asn1Decoded = ASN1.decode(this.data)
      if (!asn1Decoded) {
        throw new Error('Failed to decode ASN1 data')
      }
      const formatted = this.createFormattedStringFromASN1(asn1Decoded, null, '')
      return new TextEncoder().encode(formatted)
    } catch (error) {
      throw new Error(
        `ASN1 decoding failed: ${error instanceof Error ? error.message : 'Unknown error'}`
      )
    }
  }

  private translate(def?: DefType | null): DefType {
    if (!def) return {}

    if (typeof def.type === 'object' && def.type?.type) {
      def = def.type
    }

    while (def.type === 'defined') {
      if (!def) {
        return {}
      }
      if (typeof def.type === 'object' && 'type' in def.type) {
        def = def.type
      }
    }

    return def
  }

  private createFormattedStringFromASN1(
    value: ASN1Value,
    def: DefType | null,
    indent = ''
  ): string {
    const deftype = this.translate(def)
    const typeName = value.typeName()

    let currentDef = def

    if (deftype.name === 'CHOICE') {
      currentDef = this.handleChoiceType(deftype, typeName)
    }

    const formattedName = this.formatName(currentDef, typeName, deftype)
    const contentStr = this.formatContent(value.content())

    let result = `${indent}${formattedName}${contentStr}\n`

    if (value.sub) {
      result += this.formatSubValues(value.sub, deftype, indent)
    }

    return result
  }

  private handleChoiceType(deftype: DefType, typeName: string): DefType | null {
    if (!deftype.content) return null

    for (const content of deftype.content) {
      const translatedContent = this.translate(content)
      if (typeName === translatedContent.name) {
        return this.translate(translatedContent)
      }
    }
    return null
  }

  private formatName(def: DefType | null, typeName: string, deftype: DefType): string {
    if (!def) return typeName

    let name = ''
    if (def.type === 'defined') {
      name = def.name || ''
    }

    return name ? `${name} ${typeName}` : typeName
  }

  private formatContent(content: string | null): string {
    return content ? `: ${content.replace(/\n/g, '|')}` : ''
  }

  private formatSubValues(subValues: ASN1Value[], deftype: DefType, indent: string): string {
    const newIndent = `${indent}  `
    let result = ''
    let typeIndex = deftype.content ? 0 : -1

    for (const subValue of subValues) {
      const subType = this.getSubValueType(subValue, deftype, typeIndex)
      result += this.createFormattedStringFromASN1(subValue, subType, newIndent)
      if (typeIndex >= 0) typeIndex++
    }

    return result
  }

  private getSubValueType(
    subValue: ASN1Value,
    deftype: DefType,
    typeIndex: number
  ): DefType | null {
    if (typeIndex < 0) return null
    if (!deftype.content) return null

    if (deftype.typeOf) {
      return deftype.content[0]
    }

    const typeName = subValue.typeName().replaceAll('', ' ')
    let currentType = deftype.content[typeIndex]

    while (
      currentType &&
      ('optional' in currentType || 'default' in currentType) &&
      currentType.name !== typeName
    ) {
      typeIndex++
      currentType = deftype.content[typeIndex]
    }

    return currentType || null
  }
}
