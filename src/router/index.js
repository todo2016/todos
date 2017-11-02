import Vue from 'vue'
import Router from 'vue-router'
import TODO from '@/components/TODO'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TODO',
      component: TODO
    }
  ]
})
