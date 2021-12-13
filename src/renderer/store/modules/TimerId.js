const state = {
  main: null
}

const mutations = {
  SET_TIMER_ID (state, timerId) {
    state.main = timerId
  }
}

const actions = {
  setTimerId ({ commit }, timerId) {
    // Can do something async here
    commit('SET_TIMER_ID', timerId)
  }
}

export default {
  state,
  mutations,
  actions
}
