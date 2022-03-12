import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette
} from '@mdi/js'

export default [
  'General',
  [
    {
      to: '/admin/dashboard',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    }
  ],
  'Examples',
  [
    {
      to: '/admin/tables',
      label: 'Tables',
      icon: mdiTable
    },
    {
      to: '/admin/forms',
      label: 'Forms',
      icon: mdiSquareEditOutline
    },
    {
      to: '/admin/ui',
      label: 'UI',
      icon: mdiTelevisionGuide
    },
    {
      to: '/admin/responsive',
      label: 'Responsive',
      icon: mdiResponsive
    },
    {
      to: '/',
      label: 'Styles',
      icon: mdiPalette
    },
    {
      to: '/admin/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    },
    {
      to: '/login',
      label: 'Login',
      icon: mdiLock
    },
    {
      to: '/admin/error',
      label: 'Error',
      icon: mdiAlertCircle
    },
    {
      label: 'Submenus',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Sub-item One'
        },
        {
          label: 'Sub-item Two'
        }
      ]
    }
  ],
//   'About',
//   [
//     {
//       href: 'https://justboil.me/tailwind-admin-templates/vue-dashboard/',
//       label: 'Premium version',
//       icon: mdiMonitorShimmer,
//       target: '_blank'
//     },
//     {
//       href: 'https://github.com/justboil/admin-one-vue-tailwind',
//       label: 'GitHub',
//       icon: mdiGithub,
//       target: '_blank'
//     }
//   ]
]
