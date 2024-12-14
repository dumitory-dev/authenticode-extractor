import { useQuasar } from 'quasar'
import { ref, watch } from 'vue'

export function useDarkMode() {
  const $q = useQuasar()
  const isDark = ref($q.dark.isActive)

  const toggleDarkMode = () => {
    $q.dark.toggle()
    isDark.value = $q.dark.isActive
  }

  watch(() => $q.dark.isActive, (val) => {
    isDark.value = val
  })

  return {
    isDark,
    toggleDarkMode
  }
}
