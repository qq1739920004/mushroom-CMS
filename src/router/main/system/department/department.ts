const department = () => import('@/views/main/system/department/department.vue')
export default {
  path: '/main/system/department',
  name: 'systemDepartment',
  component: department,
  children: []
}
