import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { Theme } from '@/enums/theme'

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#000000',
    surface: '#222222',
    primary: '#2c3e50',
    secondary: '#f2f2f2',
    border: 'rgba(60, 60, 60, 0.12)',
    'border-hover': 'rgba(60, 60, 60, 0.29)',
    heading: '#2c3e50',
    text: '#2c3e50',
  },
}

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#ffffff',
    surface: '#f5f5f5',
    primary: '#1976d2',
    secondary: '#424242',
    border: 'rgba(0, 0, 0, 0.12)',
    'border-hover': 'rgba(0, 0, 0, 0.29)',
    heading: '#1976d2',
    text: '#424242',
  },
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: Theme.Dark,
    themes: {
      dark,
      light,
    },
  },
})

export default vuetify
