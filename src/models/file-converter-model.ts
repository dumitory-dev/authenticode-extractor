export enum ConvertMode {
  ASN1 = 'asn1',
  BINARY = 'binary',
}

export interface FileConverterModel {
  file: File | null
  convertMode: ConvertMode
}
