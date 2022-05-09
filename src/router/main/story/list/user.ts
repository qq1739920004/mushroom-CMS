const user = () => import('@/views/main/story/list/user.vue')
export default {
  path: '/main/story/list',
  name: 'storyList',
  component: user,
  children: []
}
