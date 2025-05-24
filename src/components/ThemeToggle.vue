<template>
  <div class="theme-toggle">
    <v-icon icon="mdi-theme-light-dark"></v-icon>
    <v-switch
      v-model="isDarkTheme"
      hide-details
      inset
      true-icon="mdi-weather-night"
      false-icon="mdi-white-balance-sunny"
      name="theme-toggle"
      @change="toggleTheme"
    ></v-switch>
  </div>
</template>
<script setup lang="ts">
import { Theme } from '@/enums/theme'
import { onMounted, ref, watch } from 'vue'
import { useTheme } from 'vuetify/lib/composables/theme.mjs'

const theme = useTheme()
const isDarkTheme = ref(theme.global.current.value.dark)

function toggleTheme() {
  const newTheme = theme.global.current.value.dark ? Theme.Light : Theme.Dark
  theme.global.name.value = newTheme
  document.body.setAttribute('data-theme', newTheme)
}

watch(
  () => theme.global.current.value.dark,
  (newVal) => {
    isDarkTheme.value = newVal
  },
)

onMounted(() => {
  const currentTheme = theme.global.current.value.dark ? Theme.Dark : Theme.Light
  document.body.setAttribute('data-theme', currentTheme)
}
)
</script>
<style scoped>
.theme-toggle {
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  display: flex;
  align-items: center;
}
</style>
