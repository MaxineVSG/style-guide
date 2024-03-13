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
import { VCard } from 'vuetify/components/VCard'

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
  aliases: {
    VCardWhite: VCard,
    VCardBlank: VCard,
  },
  defaults: {
    VCardWhite: {
      variant: 'flat',
      class: 'b b-dark-grey',
    },
    VCardBlank: {
      variant: 'flat',
    },
    VCard: {
      variant: 'tonal',
      class: 'b',
    },
    VCardTitle: {
      style: 'font-size: 1.05rem; line-height: 1.75rem;',
    },
    VCardSubtitle: {
      style: 'white-space: break-spaces;',
    },
    VToolbar: {
      density: 'compact',
    },
    VRadioGroup: {
      color: 'primary',
    },
    VSwitch: {
      inset: true,
      color: 'success',
    },
    VAppBar: {
      elevation: 0,
      rounded: 'pill',
      color: 'light-grey',
      density: 'compact',
      VBtn: {
        density: 'compact'
      },
      VIcon: {
        size: 'sm'
      },
      VAppBarNavIcon: {
        density: 'compact',
      },
    },
    VNavigationDrawer: {
      expandOnHover: true,
      permanent: true,
      rail: true,
      color: 'light-grey',
    },
    VPagination: {
      color: 'dark-grey',
    },
    VTextField: {
      variant: 'outlined'
    },
    VTextarea: {
      variant: 'outlined'
    },
    VSelect: {
      variant: 'outlined'
    },
    VDataTable: {
      fixedHeader: true,
    },
    VTab: {
      style: {'font-size': '0.75rem'}
    },
    VStepper: {
      altLabels: true,
      VStepperHeader: {
        style: {'box-shadow': 'unset'}
      },
      VDivider: {
        color: 'primary'
      }
    },
    VAlert: {
      variant: 'tonal',
      class: 'b',
    },
    VImg: {
      cover: true,
    },
    VColorPicker: {
      elevation: 0,
      class: 'b',
    },
    VDatePicker: {
      class: 'b',
    }
  },
  icons: {
    iconfont: 'mdi',
  }
})
