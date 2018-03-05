import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import user from '@/components/main/user'
import department from '@/components/main/department'
import agent from '@/components/main/agent'
import position from '@/components/main/position'
import role from '@/components/main/role'
import access from '@/components/main/access'
import line from '@/components/main/line'
import systemLog from '@/components/main/systemLog'
import dict from '@/components/main/dict'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path:'/',
      name:'home',
    },{
      path:'/user',
      name:'user',
      component:user
    },{
      path:'/department',
      name:'department',
      component:department
    },{
      path:'/agent',
      name:'agent',
      component:agent
    },{
      path:'/position',
      name:'position',
      component:position
    },{
      path:'/role',
      name:'role',
      component:role
    },{
      path:'/access',
      name:'access',
      component:access
    },{
      path:'/line',
      name:'line',
      component:line
    },{
      path:'/systemLog',
      name:'systemLog',
      component:systemLog
    },{
      path:'/dict',
      name:'dict',
      component:dict
    },
  ]
})
