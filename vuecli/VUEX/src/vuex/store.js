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
  reduce(state,n){
      state.count-=n;
  },
  reduce10(state){
    state.count-=10;
  }
}

const getters={
  count:function(state){
    return state.count+=1;
  }
  //count:state=>state.count+=100 //ES6写法 箭头函数
}

const actions={
  addAction(context){  //context：上下文对象，这里你可以理解称store本身
    context.commit('add',10);
    setTimeout(()=>{context.commit('reduce',2)},3000);
    console.log('我比reduce先执行');
  },
  reduceAction({commit}){  //{commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了
    commit('reduce',2);
  }
}

export default new Vuex.Store({//这里有坑 Store首字母要大写
  state,mutations,getters,actions, //全部都要export才能使用
})
