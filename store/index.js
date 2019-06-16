import Vue from 'vue'
import Vuex from 'vuex'
import security from '@/store/modules/security'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      security
    }
  })
}

export default createStore
