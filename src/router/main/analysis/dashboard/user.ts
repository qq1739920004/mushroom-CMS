const user = () => import('@/views/main/analysis/dashboard/user.vue')
export default {
  path: '/main/analysis/dashboard',
  name: 'analysisDashboard',
  component: user,
  children: []
}
