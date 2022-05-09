const user = () => import('@/views/main/story/chat/user.vue')
export default {
  path: '/main/story/chat',
  name: 'storyChat',
  component: user,
  children: []
}
