<template>
  <div>
      <h1>{{msg}}</h1>
      <router-view/>
  </div>
</template>
<script>
export default {
  name:"hi",
  data(){
      return{
          msg:"I am hi title"
      }
  }
}
</script>
<style scoped>

</style>
