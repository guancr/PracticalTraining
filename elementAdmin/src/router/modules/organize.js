/** When your routing organize is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const organizeRouter = {
  path: '/organize',
  component: Layout,
  redirect: '/organize/coding',
  name: 'Organize',
  meta: {
    title: 'Organize',
    icon: 'dashboard'
  },
  children: [{
    path: 'index',
    component: () => import('@/views/organize/index'),
    name: 'Index',
    meta: { title: 'Index', icon: 'Index', roles: ['index'] }
  }, {
    path: 'coding',
    component: () =>
      import ('@/views/organize/index'),
    name: 'Coding',
    meta: { title: 'Coding', icon: 'coding', roles: ['coding'] }
  }, {
    path: 'review',
    component: () =>
      import ('@/views/organize/index'),
    name: 'Review',
    meta: { title: 'Review', icon: 'review', roles: ['review'] }
  }, {
    path: 'commit',
    component: () =>
      import ('@/views/organize/index'),
    name: 'Commit',
    meta: { title: 'Commit', icon: 'commit', roles: ['commit'] }
  }, {
    path: 'prd',
    component: () =>
      import ('@/views/organize/index'),
    name: 'Prd',
    meta: { title: 'Prd', icon: 'prd', roles: ['prd'] }
  }, {
    path: 'demand',
    component: () =>
      import ('@/views/organize/index'),
    name: 'Demand',
    meta: { title: 'Demand', icon: 'demand', roles: ['demand'] }
  }, {
    path: 'activity',
    component: () =>
      import ('@/views/organize/index'),
    name: 'Activity',
    meta: { title: 'Activity', icon: 'activity', roles: ['activity'] }
  }, {
    path: 'ui',
    component: () =>
      import ('@/views/organize/index'),
    name: 'UI',
    meta: { title: 'UI', icon: 'ui', roles: ['ui'] }
  }]
}
export default organizeRouter