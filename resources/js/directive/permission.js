import store from '@/store';
// import { useStore } from 'vuex'
// const store = useStore()

export default {
  mounted(el, binding, vnode) {
    const { value } = binding;
    const permissions = store.getters && store.getters['auth/permissions'];
    const roles = store.getters && store.getters['auth/roles'];
    // console.log('permissions')
    // console.log(permissions)
    // console.log(el)
    // console.log(binding)
    // console.log(value)
    if (value && value instanceof Array && value.length > 0) {
      const requiredPermissions = value;
      const hasPermission = permissions.some(permission => {
        return requiredPermissions.includes(permission);
      });

      if (!hasPermission && !_.includes(roles, 'Super Admin')) {
          /*******
           * If The Auth user does not have required permission and the User is not Super Admin
           */
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      console.log(`Permissions are required! Example: v-permission="['manage user','manage permission']"`);
    //   throw new Error(`Permissions are required! Example: v-permission="['manage user','manage permission']"`);
    }
  },
};
