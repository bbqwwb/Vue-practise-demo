import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/hi'
import Hi1 from '@/components/hi1'
import Hi2 from '@/components/hi2'
import params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default:HelloWorld, //单页面多路由区域操作 一个页面里我们有2个以上<router-view>区域
        left:Hi1,
        right:Hi2
      }
    },{
      path: '/hi',
      // name: 'Hi',
      component:Hi,
      children:[
        {path:'/',name:'hi',component:Hi},  //子路由配置
        {path:'hi1',name:'hi1',component:Hi1},
        {path:'hi2',name:'hi2',component:Hi2}
      ]
    },{
      path:"/params/:id(\\d+)/:title",
      component:params
    },{
      path:"/goHome",
      redirect:"/"
    },{
      path:"/goParams/:id(\\d+)/:title",
      redirect:"/params/:id(\\d+)/:title"
    },{
      path:'/hi',
      component:Hi,
      alias:'/bbqwwb'
    },{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      alias:'/home'
    },{
      path:'*',
      component:Error
    }
  ]
})
