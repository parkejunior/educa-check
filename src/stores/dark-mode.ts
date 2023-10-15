import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('dark-mode', () => {
  const defaultTheme = () => {
    return localStorage.darkMode === 'dark' 
      || (!('darkMode' in localStorage) 
      && window.matchMedia('(prefers-color-scheme: dark)').matches)
  }
  
  const isDark = ref(defaultTheme())

  const toggle = ()  => isDark.value ? turnLight() : turnDark()

  const turnDark = () => {
    isDark.value = true;
    localStorage.darkMode = 'dark';
    document.documentElement.classList.add("dark");
  }

  const turnLight = () => {
    isDark.value = false;
    localStorage.darkMode = '';
    document.documentElement.classList.remove("dark");
  }

  isDark.value ? turnDark() : turnLight();

  return { toggle, isDark }
})
