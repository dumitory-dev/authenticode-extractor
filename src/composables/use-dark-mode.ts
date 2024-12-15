import { useQuasar } from 'quasar'
import { ref, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(localStorage.getItem('isDark') === 'true')
  if (isDark.value) {
    useQuasar().dark.set(true)
  }
  const $q = useQuasar()

  const toggleDarkMode = () => {
    $q.dark.toggle()
    isDark.value = $q.dark.isActive
    localStorage.setItem('isDark', $q.dark.isActive ? 'true' : 'false')
  }

  watch(
    () => $q.dark.isActive,
    (val) => {
      isDark.value = val
    }
  )

  return {
    isDark,
    toggleDarkMode,
  }
}
