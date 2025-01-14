import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import { CHANGE_MSG, INCREMENT_COUNTER, TEST_MGS } from './mutation_types'

Vue.use(Vuex)

const state = {
  msg: 'Hello Vue!',
  counter: 0
}

const mutations = {
  [CHANGE_MSG](state, msg) {
    state.msg = msg
  },
  [INCREMENT_COUNTER](state) {
    state.counter ++
  },
  [TEST_MGS](state) {
    state.counter = state.counter + 2
  }
}

export default new Vuex.Store({
  state, mutations, getters, actions
})
