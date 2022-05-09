const user = () => import('@/views/main/system/role/user.vue')
export default {
  path: '/main/system/role',
  name: 'systemRole',
  component: user,
  children: []
}
