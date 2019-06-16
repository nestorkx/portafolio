// Initial state
const state = {
  token: []
}

// Getters
const getters = {}

// Actions
const actions = {
  loadToken({ commit }) {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZX0.1yI0r4GLHC3oDsLHLiEsq62atLwX669K-h9yrtRGejc'
    commit('SET_TOKEN', token)
  }
}

// Mutations
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
