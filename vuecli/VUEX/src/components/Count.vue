<template>
    <div>
      <div>{{msg}}</div>
      <div>{{$store.state.count}}-{{count}}</div><!--后面这种更简洁的方法 需要用mapState-->
      <p>
        <button @click="$store.commit('add',10)">+10</button> <!--可以理解为 add方法的第一个参数state是默认的不需要传  直接commit方法名 后面跟参数-->
        <button @click="$store.commit('reduce10')">-10</button>
        <button @click="reduce10">-10</button><!--这种更简洁的写法  需要用mapMutations-->
        <button @click="add(2)">+2</button>
      </p>
      <p>
        <button @click="addAction">+10-2</button>
        <button @click="reduceAction">-2</button>
      </p>
    </div>
</template>
<script>
import store from '@/vuex/store';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'; //有坑 必须加{}  配合下面的mapState(['count'])用
export default {
  data(){
    return{
      msg:'hello vuex'
    }
  },
  computed:{   //ES6的写法 使用ES6中的展开运算符"…"
    ...mapState(['count']),
    // count(){
    //   return this.$store.getters.count
    // }

    ...mapGetters(['count'])
  },
  methods:{
    ...mapMutations(['add','reduce','reduce10']),
    ...mapActions(['addAction','reduceAction'])
  },
  store
}
</script>

