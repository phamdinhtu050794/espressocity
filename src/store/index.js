import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Comics: [
      { key: "0", avaliable: true, title:"comic0", src: "comic0" },
      { key: "1", avaliable: true, title:"comic1", src: "comic1" },
      { key: "2", avaliable: true, title:"comic2", src: "comic2" },
      { key: "3", avaliable: true, title:"comic3", src: "comic3" },
      { key: "4", avaliable: true, title:"comic4", src: "comic4" },
      { key: "5", avaliable: true, title:"comic5", src: "comic5" },
      { key: "6", avaliable: true, title:"comic6", src: "comic6" },
      { key: "7", avaliable: true, title:"comic7", src: "comic7" },
      { key: "8", avaliable: true, title:"comic8", src: "comic8" },
      { key: "9", avaliable: true, title:"comic9", src: "comic9" },
      { key: "10", avaliable: true, title:"comic10", src: "comic10" },
      { key: "11", avaliable: true, title:"comic11", src: "comic11" },
      // {key : "12", avaliable: true, name: "picture 13", price: "100k", src: "p15"},
    ],


  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
