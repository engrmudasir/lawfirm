import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import Admin from '@/views/Admin.vue'
import Offices from '@/views/Offices.vue'
import Roles from '@/views/Roles.vue'
import Users from '@/views/Users.vue'
import Questionnaires from '@/views/Questionnaires.vue'
import Dashboard from '@/views/Dashboard.vue'
import { useToast, useModal } from 'tailvue'

const $toast = useToast()
const $modal = useModal()

const routes = [
  {
    meta: {
    //   title: 'Home',
      fullScreen: true
    },
    path: '/',
    name: 'home',
    component: Home
  },
  {
    meta: {
    //   title: 'Home',
      fullScreen: true
    },
    path: '/questionnaire/:id',
    name: 'Questionnaire',
    component: () => import(/* webpackChunkName: "questionnaire" */ '@/views/Front/Questionnaire.vue')
  },
  {
    meta: {
      title: 'Login',
      fullScreen: true,
      guard : 'guest'
    },
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Admin',
      guard : 'auth'
    },
    path: '/admin',
    name: 'admin',
    component: Admin,
    redirect: {
        name: 'dashboard'
    },
    children: [
          {
            // Document title tag
            // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
            meta: {
              title: 'Dashboard'
            },
            path: 'dashboard',
            name: 'dashboard',
            component: Dashboard
          },
          {
            meta: {
              title: 'Tables'
            },
            path: 'tables',
            name: 'tables',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "tables" */ '@/views/Tables.vue')
          },
          {
            meta: {
              title: 'Forms'
            },
            path: 'forms',
            name: 'forms',
            component: () => import(/* webpackChunkName: "forms" */ '@/views/Forms.vue')
          },
          {
            meta: {
              title: 'Profile'
            },
            path: 'profile',
            name: 'profile',
            component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue')
          },
          {
            meta: {
              title: 'Ui'
            },
            path: 'ui',
            name: 'ui',
            component: () => import(/* webpackChunkName: "ui" */ '@/views/Ui.vue')
          },
          {
            meta: {
              title: 'Responsive layout'
            },
            path: 'responsive',
            name: 'responsive',
            component: () => import(/* webpackChunkName: "responsive" */ '@/views/Responsive.vue')
          },
          {
            meta: {
              title: 'Error',
              fullScreen: true
            },
            path: 'error',
            name: 'error',
            component: () => import(/* webpackChunkName: "error" */ '@/views/Error.vue')
          },
          {
            meta: {
              title: 'Offices'
            },
            path: 'offices',
            name: 'offices',
            component: Offices,
            children: [
                {
                    meta: {
                      title: 'Offices',
                      permissions: ['list offices']
                    },
                    path: '',
                    name: 'List Offices',
                    component: () => import(/* webpackChunkName: "Office List" */ '@/views/Offices/List.vue')
                },
                {
                    meta: {
                      title: 'Create Office'
                    },
                    path: 'new',
                    name: 'Create Office',
                    component: () => import(/* webpackChunkName: "Office Create" */ '@/views/Offices/Create.vue')
                },
                {
                    meta: {
                      title: 'Update Office'
                    },
                    path: ':id/update',
                    name: 'Update Office',
                    props: true,
                    component: () => import(/* webpackChunkName: "Office Update" */ '@/views/Offices/Record.vue')
                },
            ]
          },
          {
            meta: {
              title: 'Roles'
            },
            path: 'roles',
            name: 'roles',
            component: Roles,
            children: [
                {
                    meta: {
                      title: 'Roles',
                      permissions: ['list roles']
                    },
                    path: '',
                    name: 'List Roles',
                    component: () => import(/* webpackChunkName: "Role List" */ '@/views/Roles/List.vue')
                },
                {
                    meta: {
                      title: 'Create Role'
                    },
                    path: 'new',
                    name: 'Create Role',
                    component: () => import(/* webpackChunkName: "Role Create" */ '@/views/Roles/Create.vue')
                },
                {
                    meta: {
                      title: 'Update Role'
                    },
                    path: ':id/update',
                    name: 'Update Role',
                    props: true,
                    component: () => import(/* webpackChunkName: "Role Update" */ '@/views/Roles/Record.vue')
                },
            ]
          },
          {
            meta: {
              title: 'Users'
            },
            path: 'users',
            name: 'users',
            component: Users,
            children: [
                {
                    meta: {
                      title: 'Users',
                      permissions: ['list users']
                    },
                    path: '',
                    name: 'List Users',
                    component: () => import(/* webpackChunkName: "Users List" */ '@/views/Users/List.vue')
                },
                {
                    meta: {
                      title: 'Create User'
                    },
                    path: 'new',
                    name: 'Create User',
                    component: () => import(/* webpackChunkName: "User Create" */ '@/views/Users/Create.vue')
                },
                {
                    meta: {
                      title: 'Update User'
                    },
                    path: ':id/update',
                    name: 'Update User',
                    props: true,
                    component: () => import(/* webpackChunkName: "User Update" */ '@/views/Users/Record.vue')
                },
            ]
          },
          {
            meta: {
              title: 'Questionnaires'
            },
            path: 'questionnaires',
            name: 'questionnaires',
            component: Questionnaires,
            children: [
                {
                    meta: {
                      title: 'Questionnaires',
                      permissions: ['list questionnaires']
                    },
                    path: '',
                    name: 'List Questionnaires',
                    component: () => import(/* webpackChunkName: "Questionnaires List" */ '@/views/Questionnaires/List.vue')
                },
                {
                    meta: {
                      title: 'Create Questionnaire'
                    },
                    path: 'new',
                    name: 'Create Questionnaire',
                    component: () => import(/* webpackChunkName: "Questionnaires Create" */ '@/views/Questionnaires/Create.vue')
                },
                {
                    meta: {
                      title: 'Update Questionnaire'
                    },
                    path: ':id/update',
                    name: 'Update Questionnaire',
                    props: true,
                    component: () => import(/* webpackChunkName: "Questionnaire Update" */ '@/views/Questionnaires/Record.vue')
                },
            ]
          },
    ]
  },
  {
    meta: {
        title: 'Page Not Found',
        fullScreen: true
      },
    path: '/:pathMatch(.*)*',
    component: () => import(/* webpackChunkName: "pagenotfound" */ '@/views/PageNotFound.vue'),
    // redirect: '/',
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
    // console.log(to)
    // console.log(store.getters['auth/user'])
    const roles = store.getters['auth/roles']
    const permissions = store.getters['auth/permissions']
    if (store.getters['auth/user']) {
      if (to.matched.some(route => route.meta.guard === 'guest')){
        next({ name: 'home' })
      } else {
          if(canAccess(roles, permissions,to)){
            next();
          } else {
            $modal.show({
                type: 'danger',
                title: 'Access Denied',
                body: 'You do not have permissions to access this route',
                primary: {
                    label: 'Ok',
                    theme: 'red',
                    action: () => false,
                },
                })
          }
      }
    } else {
      if (to.matched.some(route => route.meta.guard === 'auth')){
        next({ name: 'login' })
      } else {
        next();
      }
    }
})

/**
 * Check if it matches the current user right by meta.role
 * @param {String[]} roles
 * @param {String[]} permissions
 * @param route
 */
 function canAccess(roles, permissions, route) {
    if (route.meta) {
        if(_.includes(roles, 'Super Admin')) {
            /*******
             * If the Auth user is Super Admin then can access everything
             */

            return true
        }
      let hasRole = true;
      let hasPermission = true;
      if (route.meta.roles || route.meta.permissions) {
        // If it has meta.roles or meta.permissions, accessible = hasRole || permission
        hasRole = false;
        hasPermission = false;
        if (route.meta.roles) {
          hasRole = roles.some(role => route.meta.roles.includes(role));
        }

        if (route.meta.permissions) {
          hasPermission = permissions.some(permission => route.meta.permissions.includes(permission));
        }
      }

      return hasRole || hasPermission;
    }

    // If no meta.roles/meta.permissions inputted - the route should be accessible
    return true;
  }

export default router
