<template>
  <div>
    <h1>{{msg}}</h1>
    <p>找不到当前页面</p>
  </div>
</template>
<script>
export default {
  name:"Error",
  data(){
    return{
      msg:"Error:404"
    }
  }
}
</script>

