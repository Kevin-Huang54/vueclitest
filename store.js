import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dishes: [
      { name: '可乐鸡翅', price: 34 },
      { name: '大鸡腿', price: 10 }
    ]
  },
  getters: {
    changePrice (state) {
      return state.dishes.map(value => {
        return {
          name: value.name,
          price: value.price * 100
        }
      })
    }
  },
  mutations: {

  },
  actions: {

  }
})
