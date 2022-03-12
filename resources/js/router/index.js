import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import Admin from '@/views/Admin.vue'
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
          }
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
    console.table(to)
    if (store.getters['user/user']) {
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
