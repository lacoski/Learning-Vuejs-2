import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const state = {
  msg: 'Hello Vue!',
  msg1: 'Test data!'
}

const mutations = {
  changeMessage(state, msg) {
    state.msg = msg
  },
  testMessage(state, msg1) {
    state.msg1 = msg1
  }
}

export default new Vuex.Store({
  state, mutations, getters
})
