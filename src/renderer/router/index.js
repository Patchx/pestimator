import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/new-project',
      name: 'new-project-page',
      component: require('@/components/NewProjectPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
