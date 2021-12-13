const state = {
  main: {
    name: undefined,
    description: undefined,
    timeSpent: 0
  }
}

const mutations = {
  CREATE_PROJECT (state, projectData) {
    state.main = projectData
  },
  INCREMENT_TIME_SPENT (state) {
    if (state.main.timeSpent === undefined) {
      state.main.timeSpent = 0
    } else {
      state.main.timeSpent++
    }
  }
}

const actions = {
  createProject ({ commit }, projectData) {
    // Can do something async here
    commit('CREATE_PROJECT', projectData)
  },
  incrementTimeSpent ({ commit }) {
    commit('INCREMENT_TIME_SPENT')
  }
}

export default {
  state,
  mutations,
  actions
}
