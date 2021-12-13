const state = {
  main: {}
}

const mutations = {
  CHANGE_PROJECT (state, projectData) {
    state.main = projectData
  }
}

const actions = {
  changeProject ({ commit }, projectData) {
    // Can do something async here
    commit('CHANGE_PROJECT', projectData)
  }
}

export default {
  state,
  mutations,
  actions
}
