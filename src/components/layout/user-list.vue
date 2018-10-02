<template>
  <div>
    <h3>Connected clients</h3>
    <v-list two-line>
      <template v-for="(clientId, index) in clients">
        <v-list-tile v-if="$socket.id !== clientId" :key="clientId" avatar @click.native="onClick(clientId)">
          <v-list-tile-avatar>
            <img src="http://placekitten.com/50/50">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="clientId"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  sockets: {
    connect: function() {
      this.getConnectedClients(this.$socket)
    },
  },

  computed: {
    ...mapGetters(['clients', 'myClientId']),
  },

  methods: {
    ...mapActions([
      'getConnectedClients', 'setConnectedClients',
    ]),

    onClientEvent() {
      this.getConnectedClients(this.$socket)
    },

    onClick(socketId) {
      this.$router.push({ name: 'chat', params: { idUser: socketId } })
    },
  },

  mounted() {
    this.$socket.on('client-connected', this.onClientEvent)
    this.$socket.on('client-disconnected', this.onClientEvent)

    this.$socket.on('client-list-given', list => {
      this.setConnectedClients(list)
    })
  },
}
</script>
