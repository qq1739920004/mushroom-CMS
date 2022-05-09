const user = () => import('@/views/main/system/department/user.vue')
export default {
  path: '/main/system/department',
  name: 'systemDepartment',
  component: user,
  children: []
}
