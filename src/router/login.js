import login from '@/components/login'
let routes = [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requiresAuth: false
      }
    }
  ]
  