import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:{
      titulo: null,
      estado: false
    }
  },
  getters: {
  },
  mutations: {
    /* payload hace referencia al unico parametro que pasaremos, en este caso el tiulo */
    mostrarLoading(state,payload){
      state.loading.titulo = payload.titulo
      state.loading.estado = true
    },
    ocultarLoading(state){
      state.loading.estado=false
    }
  },
  actions: {
  },
  modules: {
  }
})
