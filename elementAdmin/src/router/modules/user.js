/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/user/index',
  name: 'User',
  meta: {
    title: 'UserList',
    icon: 'table'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/user/index.vue'),
      name: 'user',
      meta: { title: 'UserList' }
    }
  ] 
}
export default userRouter
