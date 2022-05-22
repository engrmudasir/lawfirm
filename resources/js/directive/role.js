import store from '@/store';

export default {
  mounted(el, binding, vnode) {
    const { value } = binding;
    const roles = store.getters && store.getters['auth/roles'];

    if (value && value instanceof Array && value.length > 0) {
      const requiredRoles = value;
      const hasRole = roles.some(role => {
        return requiredRoles.includes(role);
      });

      if (!hasRole && !_.includes(roles, 'Super Admin')) {
        //   Only the listed roles and Super Admin can have access of this element
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`Roles are required! Example: v-role="['admin','editor']"`);
    }
  },
};
