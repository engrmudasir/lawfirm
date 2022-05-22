import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiGithub,
  mdiAccountGroup,
  mdiLock,
  mdiAlertCircle,
  mdiNfc,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiCog,
  mdiOfficeBuildingMarker
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
  'Panel',
  [
    {
      to: '/admin/tables',
      label: 'Tables',
      icon: mdiTable,
      permissions: ['Template'],
    },
    {
      to: '/admin/forms',
      label: 'Forms',
      icon: mdiSquareEditOutline,
      permissions: ['Template'],
    },
    {
      to: '/admin/ui',
      label: 'UI',
      icon: mdiTelevisionGuide,
      permissions: ['Template'],
    },
    {
      to: '/admin/responsive',
      label: 'Responsive',
      icon: mdiResponsive,
      permissions: ['Template'],
    },
    {
      to: '/',
      label: 'Styles',
      icon: mdiPalette,
      permissions: ['Template'],
    },
    {
      to: '/admin/profile',
      label: 'Profile',
      icon: mdiAccountCircle,
      permissions: ['Template'],
    },
    {
      to: '/login',
      label: 'Login',
      icon: mdiLock,
      permissions: ['Template'],
    },
    {
      to: '/admin/error',
      label: 'Error',
      icon: mdiAlertCircle,
      permissions: ['Template'],
    },
    {
      to: '/admin/questionnaires',
      label: 'Questionnaires',
      icon: mdiNfc,
      permissions: ['list questionnaires']
    },
    {
      to: '/admin/users',
      label: 'Users',
      icon: mdiAccountGroup,
      permissions: ['list users']
    },
    {
      label: 'Settings',
      subLabel: 'settings',
      icon: mdiCog,
      permissions: ['list Offices','list Roles'],
      menu: [
        {
            to: '/admin/offices',
            label: 'Offices',
            icon: mdiOfficeBuildingMarker,
            permissions: ['list Offices']
        },
        {
            to: '/admin/roles',
            label: 'Roles',
            icon: mdiOfficeBuildingMarker,
            permissions: ['list Roles']
        }
      ]
    },
    {
      label: 'Submenus',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      permissions: ['Template'],
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
