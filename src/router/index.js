import Vue from 'vue'
import Router from 'vue-router'
// import TODO from '@/components/TODO'
import todolist from '@/components/todolist/todolist'
import creatlist from '@/components/creatlist/creatlist'

Vue.use(Router)

const routes = [{
    path: '/',
    name: 'todolist',
    component: todolist
  }, {
    path: '/creatlist',
    name: 'creatlist',
    component: creatlist
  }
  ];
export default new Router({
  routes
})
