import { createStore } from 'vuex'
import activity from '../store/activity'

const Vuex = createStore({ modules: { activity: {namespaced: true,...activity }} })

export default Vuex
