import { ref, computed } from 'vue'
import { FileConverterModel, ConvertMode } from '@/models/file-converter-model'
import { Asn1AuthenticodeExtractor } from '@/utils/asn1-authenticode-extractor'
import { BinaryAuthenticodeExtractor } from '@/utils/binary-authenticode-extractor'
import { IAuthenticodeExtractor } from '@/types/types'
import { Notify } from 'quasar'

export const ConvertModeLabels: Record<ConvertMode, string> = {
  [ConvertMode.ASN1]: 'ASN1 decoded',
  [ConvertMode.BINARY]: 'Raw Binary',
}

function showNotification(message: string, type: string | 'positive' | 'negative' | 'warning') {
  Notify.create({
    type: type,
    message: message,
    position: 'top',
    timeout: 2000,
  })
}

const downloadFile = (data: Blob, filename: string) => {
  const url = window.URL.createObjectURL(data)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

function _getBinaryAuthenticode(data: Uint8Array) {
  const extractor: IAuthenticodeExtractor = new BinaryAuthenticodeExtractor(data)
  return extractor.getInfo()
}

export function useFileConverter() {
  const file = ref<FileConverterModel['file']>(null)
  const convertMode = ref<FileConverterModel['convertMode']>(ConvertMode.ASN1)
  const convertOptions = computed(() =>
    Object.entries(ConvertMode).map(([_, value]) => ({
      label: ConvertModeLabels[value as ConvertMode],
      value: value as ConvertMode,
    }))
  )
  const isLoading = ref(false)
  const convertFile = async (): Promise<void> => {
    try {
      if (isLoading.value) {
        showNotification('Already in progress', 'negative')
        return
      }
      if (!file.value) {
        showNotification('No file selected', 'negative')
        return
      }
      switch (convertMode.value) {
        case ConvertMode.ASN1: {
          isLoading.value = true
          const fileData = await file.value.arrayBuffer()
          const fileName = file.value.name
          const binaryAuthenticode = _getBinaryAuthenticode(new Uint8Array(fileData))
          const extractor: IAuthenticodeExtractor = new Asn1AuthenticodeExtractor(
            binaryAuthenticode
          )
          const result = extractor.getInfo()
          isLoading.value = false
          downloadFile(new Blob([result]), fileName + '.txt')
          break
        }
        case ConvertMode.BINARY: {
          isLoading.value = true
          const fileData = await file.value.arrayBuffer()
          const fileName = file.value.name
          const result = new Blob([_getBinaryAuthenticode(new Uint8Array(fileData))])
          isLoading.value = false
          downloadFile(result, fileName + '.p7b')
          break
        }
        default: {
          showNotification('Invalid conversion mode', 'negative')
        }
      }
    } catch (error) {
      showNotification(
        `Failed to convert file: ${error instanceof Error ? error.message : 'Unknown error'}`,
        'negative'
      )
    }
  }

  return {
    file,
    convertMode,
    convertFile,
    convertOptions,
    isLoading,
  }
}
