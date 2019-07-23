import { CHANGE_MSG, INCREMENT_COUNTER, TEST_MGS } from './mutation_types'

export default {
  changeMessage ({ commit }, msg) {
    commit(CHANGE_MSG, msg)
  },
  incrementCounter ({ commit }) {
    commit(INCREMENT_COUNTER)
  },
  testCounter ({ commit }) {
    commit(TEST_MGS)
  },
  handleMessageInputChanges ({ commit }, event) {
    commit(CHANGE_MSG, event.target.value)
    if (event.keyCode === 13) {
      commit(INCREMENT_COUNTER)
    }
    if (event.keyCode === 32) {
      commit(TEST_MGS)
    }
  }
}
