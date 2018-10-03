import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import clients from './modules/clients'
import messages from './modules/messages'
import notifications from './modules/notifications'

Vue.use(Vuex)
Vue.use(VueResource)

export default new Vuex.Store({
  modules: {
    clients,
    messages,
    notifications,
  },
  strict: true,
})
