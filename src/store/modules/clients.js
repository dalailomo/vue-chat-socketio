const SET_MY_CLIENT_ID = 'SET_MY_CLIENT_ID'
const SET_CLIENT_LIST = 'SET_CLIENT_LIST'

const state = {
  myClientId: null,
  clients: [],
}

const getters = {
  myClientId: (state) => state.myClientId,
  clients: (state) => state.clients,
}

const mutations = {
  [SET_MY_CLIENT_ID](state, myClientId) {
    state.myClientId = myClientId
  },

  [SET_CLIENT_LIST](state, clientList) {
    state.clients = clientList
  },
}

const actions = {
  getConnectedClients: (ctx, socket) => new Promise((resolve, reject) => {
    socket.emit('get-client-list', { clientId: socket.id })

    resolve()
  }),

  setConnectedClients: (ctx, clients) => new Promise((resolve, reject) => {
    ctx.commit(SET_CLIENT_LIST, clients)

    resolve()
  }),

  setMyClientId: (ctx, clientId) => new Promise((resolve, reject) => {
    ctx.commit(SET_MY_CLIENT_ID, clientId)

    resolve()
  }),
}

export default {
  state,
  actions,
  getters,
  mutations,
}
