<template>
  <v-container width="20rem" class="d-flex align-center h-100">
    <v-container>
      <v-card color="background-soft" class="d-flex align-center justify-center pa-4">
        <h1 variant="outlined" id="click-count">
          {{ count }}
        </h1>
      </v-card>
      <v-container class="px-0 d-flex justify-space-between">
        <v-btn @click="count--" :variant="buttonVariant" color="red" name="click-increment-down">
          <v-icon> mdi-minus </v-icon>
        </v-btn>
        <v-btn @click="count = 0" :variant="buttonVariant" color="amber" name="click-reset">
          <v-icon> mdi-reload </v-icon>
        </v-btn>
        <v-btn @click="count++" :variant="buttonVariant" color="green" name="click-increment">
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </v-container>
    </v-container>
  </v-container>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify/lib/composables/theme.mjs'

const theme = useTheme()

const count = ref(0)
const buttonVariant = ref<'outlined' | 'elevated'>('outlined')

watch(
  () => theme.global.current.value.dark,
  (newVal) => {
    if (!newVal) {
      buttonVariant.value = 'elevated'
    } else {
      buttonVariant.value = 'outlined'
    }
  },
)
</script>
