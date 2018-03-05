import Vue from 'vue'; //引入vue
import Vuex from 'vuex'; //引入vuex

Vue.use(Vuex);

const state={
  count:6
}

const mutations={
  add(state,n){
      state.count+=n;
  },
  reduce(state){
      state.count--;
  }
}

const getters={
  count:function(state){
    return state.count+=100;
  }
  //count:state=>state.count+=100 //ES6写法 箭头函数
}

export default new Vuex.Store({//这里有坑 Store首字母要大写
  state,mutations,getters, //全部都要export才能使用
})
