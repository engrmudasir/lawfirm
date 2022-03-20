import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import Admin from '@/views/Admin.vue'
import Offices from '@/views/Offices.vue'
import Roles from '@/views/Roles.vue'
import Users from '@/views/Users.vue'
import Dashboard from '@/views/Dashboard.vue'

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
                      title: 'Offices'
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
                      title: 'Roles'
                    },
                    path: '',
                    name: 'List Roles',
                    component: () => import(/* webpackChunkName: "Role List" */ '@/views/Roles/List.vue')
                }
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
                      title: 'Users'
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
    if (store.getters['auth/user']) {
      if (to.matched.some(route => route.meta.guard === 'guest')){
        next({ name: 'home' })
      } else {
        next();
      }
    } else {
      if (to.matched.some(route => route.meta.guard === 'auth')){
        next({ name: 'login' })
      } else {
        next();
      }
    }
})

export default router
