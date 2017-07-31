const state = {
  main: 0,
  ports: [],
  port: 0
}

const mutations = {
  DECREMENT_PORT_NUMBER(state) {
    state.port--
  },
  INCREMENT_PORT_NUMBER(state) {
    state.port++
  }
}

const actions = {
  someAsyncTask({ commit }) {
    commit('INCREMENT_PORT_NUMBER')
  }
}

export default {
  state,
  mutations,
  actions
}
