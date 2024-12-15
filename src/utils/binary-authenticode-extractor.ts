import { PE_CONSTANTS } from '@/constants/constants'
import { IAuthenticodeExtractor } from '@/types/types'

export class BinaryAuthenticodeExtractor implements IAuthenticodeExtractor {
  private readonly data: DataView

  constructor(fileData: Uint8Array) {
    this.data = new DataView(fileData.buffer)
  }

  public getInfo(): Uint8Array {
    const ntHeader = this.getNtHeader()
    this.validateSectionCount(ntHeader)

    const optionalHeader = this.getOptionalHeader(ntHeader)
    const rvaCountOffset = this.getRvaCountOffset(optionalHeader)
    this.validateRvaCount(rvaCountOffset)

    const { digitalSignature, digitalSignatureSize } = this.getDigitalSignatureInfo(rvaCountOffset)

    return new Uint8Array(this.data.buffer, digitalSignature, digitalSignatureSize)
  }

  private getNtHeader(): number {
    if (this.data.getUint16(0, true) !== PE_CONSTANTS.IMAGE_DOS_SIGNATURE) {
      throw new Error('Invalid DOS signature')
    }

    const offsetNtHeader = this.data.getUint32(60, true)

    if (this.data.getUint32(offsetNtHeader, true) !== PE_CONSTANTS.IMAGE_NT_SIGNATURE) {
      throw new Error('Invalid NT header')
    }

    return offsetNtHeader
  }

  private validateSectionCount(ntHeader: number): void {
    const fileHeader = ntHeader + 4
    const numberOfSectionsAddr = fileHeader + 2
    const numberOfSections = this.data.getUint16(numberOfSectionsAddr, true)

    if (numberOfSections < 1) {
      throw new Error('No sections found in PE file')
    }
  }

  private getOptionalHeader(ntHeader: number): number {
    return ntHeader + 24
  }

  private getRvaCountOffset(optionalHeaderOffset: number): number {
    const magic = this.data.getUint16(optionalHeaderOffset, true)

    switch (magic) {
      case PE_CONSTANTS.X32_IMAGE_NT_OPTIONAL_HDR32_MAGIC:
        return optionalHeaderOffset + 92
      case PE_CONSTANTS.X64_IMAGE_NT_OPTIONAL_HDR64_MAGIC:
        return optionalHeaderOffset + 108
      default:
        throw new Error('Invalid optional header magic number')
    }
  }

  private validateRvaCount(offset: number): void {
    const rvaCount = this.data.getUint32(offset, true)
    if (rvaCount < 5) {
      throw new Error('No PE security field found')
    }
  }

  private getDigitalSignatureInfo(rvaCountOffset: number): {
    digitalSignature: number
    digitalSignatureSize: number
  } {
    const securityDirectory = rvaCountOffset + 4 + 4 * 8
    const virtualAddressOfSecurityDirectory = this.data.getUint32(securityDirectory, true)
    const size = this.data.getUint32(securityDirectory + 4, true)

    if (!size) {
      throw new Error('File does not contain a digital signature')
    }

    return {
      digitalSignature:
        virtualAddressOfSecurityDirectory + PE_CONSTANTS.ATTRIBUTE_CERTIFICATE_HEADER_SIZE,
      digitalSignatureSize: size - PE_CONSTANTS.ATTRIBUTE_CERTIFICATE_HEADER_SIZE,
    }
  }
}
