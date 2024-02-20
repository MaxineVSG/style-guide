/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '../scss/main.scss'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'akero',
    themes: {
      akero: {
        dark: false,
        colors: {
          primary: '#1D4ED8',
          'primary-light': '#DBEAFE',
          secondary: '#7C3AED',
          'secondary-light': '#EDE9FE',
          info: '#38BDF8',
          'info-light': '#F0F9FF',
          success: '#10B981',
          'success-light': '#ECFDF5',
          warning: '#FB923C',
          'warning-light': '#FFF7ED',
          danger: '#BE123C',
          'danger-light': '#FFE4E6',
          black: '#1E293B',
          'dark-grey': '#64748B',
          'light-grey': '#F1F5F9',
          white: '#FFFFFF' 
        },
        variables: {
          'theme-on-primary-light': '#1D4ED8',
          'theme-on-secondary-light': '#7C3AED',
          'theme-on-info-light': '#38BDF8',
          'theme-on-success-light': '#10B981',
          'theme-on-warning-light': '#FB923C',
          'theme-on-danger-light': '#BE123C',
        }
      }
    }
  },
  icons: {
    iconfont: 'mdi',
  }
})
