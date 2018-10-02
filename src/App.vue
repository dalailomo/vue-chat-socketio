<template>
  <v-app id="app">
    <notification />
    <router-view />
  </v-app>
</template>

<script>
import Notification from '@/components/layout/notification'
import { mapActions } from 'vuex'

export default {
  components: {
    'notification': Notification,
  },

  sockets: {
    connect: function() {
      this.setMyClientId(this.$socket.id)
    },
  },

  methods: {
    ...mapActions(['setMyClientId']),
  },
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
