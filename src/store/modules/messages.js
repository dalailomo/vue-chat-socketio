const PUSH_MESSAGE = 'PUSH_MESSAGE'

const state = {
  messages: [],
}

const getters = {
  messages: (state) => state.messages,
}

const mutations = {
  [PUSH_MESSAGE](state, message) {
    state.messages.push(message)
  },
}

const actions = {
  pushMessage: (ctx, msgPayload) => new Promise((resolve, reject) => {
    ctx.commit(PUSH_MESSAGE, msgPayload)

    resolve()
  }),
}

export default {
  state,
  actions,
  getters,
  mutations,
}
