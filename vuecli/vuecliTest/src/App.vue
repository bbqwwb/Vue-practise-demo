<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goBack">后退</button>
      <button @click="goForward">前进</button>
      <button @click="goHome">回到首页</button>
    </div>
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">hi</router-link> |
      <router-link :to="{name:'hi1',params:{username:'bbqwwb',id:'132'}}">hi1</router-link> |
      <router-link to="/hi/hi2">hi2</router-link> |
      <router-link to="/params/12/bbqwwb website">params</router-link> |
      <router-link to="/goHome">goHome</router-link> |
      <router-link to="/goParams/2333/redirect with inf">goParams</router-link> |
      <router-link to="/bbqwwb">bbqwwb</router-link> |
      <router-link to="/home">home</router-link> |
      <router-link to="/asdakbj">404</router-link> |
    </div>

    <p>{{ $route.name}}</p>

    <transition name="fademode" mode="out-in">
      <router-view/>
    </transition>
      <router-view name="left" style="float:left;width:50%;background:#999" />
      <router-view name="right" style="float:left;width:50%;background:#666" />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goForward(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push("/");
    }
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
  margin-top: 60px;
}
.fademode-enter{
  opacity: 0;
  background: green;
}
.fademode-leave{
  opacity:1;
}
.fademode-enter-active{
  transition: 1s;
}
.fademode-leave-active{
  opacity:0;
  transition: 1s;
}
</style>
