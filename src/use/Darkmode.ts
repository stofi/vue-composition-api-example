import { onBeforeMount, ref } from 'vue'

export default function () {
  const darkModeEnabled = ref(false)
  const root = document.querySelector(':root') || document.body

  onBeforeMount(
    () =>
      (darkModeEnabled.value = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches)
  )
  window.matchMedia('(prefers-color-scheme: dark)').matches &&
    root.classList.add('dark')

  function toggle() {
    darkModeEnabled.value = !darkModeEnabled.value
    if (darkModeEnabled.value) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }
  function setDarkmode(state: boolean) {
    darkModeEnabled.value = state
    if (darkModeEnabled.value) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }
  return { darkModeEnabled, toggle, setDarkmode }
}
