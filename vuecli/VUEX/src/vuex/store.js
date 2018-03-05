import Vue from 'vue'; //引入vue
import Vuex from 'vuex'; //引入vuex

Vue.use(Vuex);

const state={
  count:6
}

const mutations={
  add(state){
      state.count++;
  },
  reduce(state){
      state.count--;
  }
}

export default new Vuex.Store({//这里有坑 Store首字母要大写
  state,
  mutations //全部都要export才能使用
})
