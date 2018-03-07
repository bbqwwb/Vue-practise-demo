<template>
    <div class="app">
      <opHeader></opHeader>
      <topbars></topbars>
      <div class="body">
        <div class="nav">
          <div class="info"><img src="../../assets/img/head.png" alt=""><span>您好</span></div>
          <ul class="root">
            <li><router-link to="/"><span>首页</span></router-link></li>
            <li><router-link to="/user"><span>用户管理</span></router-link></li>
            <li><router-link to="/department"><span>部门管理</span></router-link></li>
            <li><router-link to="/agent"><span>商场管理</span></router-link></li>
            <li><router-link to="/position"><span>职位管理</span></router-link></li>
            <li><router-link to="/role"><span>角色管理</span></router-link></li>
            <li><router-link to="/access"><span>权限管理</span></router-link></li>
            <li><router-link to="/line"><span>线别管理</span></router-link></li>
            <li><router-link to="/systemLog"><span>系统日志</span></router-link></li>
            <li><router-link to="/dict"><span>字典管理</span></router-link></li>
          </ul>
        </div>
        <div class="main">
          <div class="el-breadcrumb"></div>
          <div class="container">
            <router-view/>
          </div>
        </div>
      </div>
      <opFooter></opFooter>
    </div>
</template>
<script>
import opHeader from "./header"
import opFooter from "./footer"
import topbars from "./topbars"


export default {
    name: 'layout',
    components:{
        opHeader,
        opFooter,
        topbars
    },
}
</script>

