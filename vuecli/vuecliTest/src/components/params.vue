<template>
  <div>
      <h1>{{msg}}</h1>
      <p>{{$route.params.id}}-{{$route.params.title}}</p>
  </div>
</template>
<script>
export default {
  name:"params",
  data(){
      return {
          msg:"params con"
      }
  },
  beforeRouteEnter:(to,from,next)=>{
    console.log('进入');
    console.log(to);
    console.log(from);
    next(); //控制跳转 没有的话不能跳转
  },
  beforeRouteLeave:(to,from,next)=>{
    console.log('离开');
    next();
  }
}
</script>
<style scoped>

</style>

