export default {
  state: {
    activities: []
  },
  actions: {
    add({ commit }, title) {
      commit('add', {
        title,
        done: false
      })
    },
    remove({ commit }, activity) {
      console.log('removed 1', activity)
      commit('remove', {
        activity
      })
    },
    toggle({ commit }, activity) {
      commit('toggle', {
        activity,
        done: !activity.done
      })
    }
  },
  mutations: {
    add(state, activity) {
      state.activities.push(activity)
    },
    remove(state, { activity }) {
      console.log('removed 2', activity)
      state.activities.splice(state.activities.indexOf(activity), 1)
    },
    toggle(state, { activity, done }) {
      activity.done = done // eslint-disable-line no-param-reassign
    }
  }
}
