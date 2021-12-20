const state = {
  main: {
    name: undefined,
    description: undefined,
    timeSpent: 0
  }
}

const mutations = {
  ADJUST_TIME_SPENT (state, seconds) {
    state.main.timeSpent = seconds
  },
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
  adjustTimeSpent ({ commit }, seconds) {
    commit('ADJUST_TIME_SPENT', seconds)
  },
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
