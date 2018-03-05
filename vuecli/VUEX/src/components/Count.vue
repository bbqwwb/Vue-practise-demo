<template>
    <div>
      <div>{{msg}}</div>
      <div>{{$store.state.count}}</div>
      <p>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
      </p>
    </div>
</template>
<script>
import store from '@/vuex/store';
export default {
  data(){
    return{
      msg:'hello vuex'
    }
  },
  store
}
</script>

