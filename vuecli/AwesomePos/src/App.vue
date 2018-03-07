<template>
  <div id="app">
    <!-- 左侧导航 -->
    <leftNav></leftNav>
    <!-- 操作区域 -->
    <div class="main">
      <router-view/>
    </div>

  </div>
</template>

<script>
import leftNav from '@/components/common/leftNav'
export default {
  name: 'App',
  components: {
    leftNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.main{
  width: 95%;
  height: 100%;
  float: left;
  background: #EFF2F7;
  overflow: auto;
}
</style>
