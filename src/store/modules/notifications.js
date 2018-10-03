const PUSH_NOTIFICATION = 'PUSH_NOTIFICATION'
const SET_VISIBILITY = 'SET_VISIBILITY'

const state = {
  notification: '',
  visible: false,
}

const getters = {
  notification: (state) => state.notification,
  isVisible: (state) => state.visible,
}

const mutations = {
  [PUSH_NOTIFICATION](state, notification) {
    state.notification = notification
  },

  [SET_VISIBILITY](state, visibility) {
    state.visible = visibility
  },
}

const actions = {
  pushNotification: (ctx, notification) => new Promise((resolve, reject) => {
    ctx.commit(PUSH_NOTIFICATION, notification)
    ctx.commit(SET_VISIBILITY, true)

    resolve()
  }),

  setNotificationVisibility: (ctx, visibility) => new Promise((resolve, reject) => {
    ctx.commit(SET_VISIBILITY, visibility)

    resolve()
  }),
}

export default {
  state,
  actions,
  getters,
  mutations,
}
