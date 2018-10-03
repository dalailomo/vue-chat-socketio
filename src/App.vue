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
    ...mapActions(['setMyClientId', 'pushMessage', 'pushNotification', 'setNotificationVisibility']),

    attachMessagesListener() {
      // careful with this!!! don't attach the same listener twice
      if (this.$socket._callbacks['$message-sent']) {
        return
      }

      this.$socket.on('message-sent', msgPayload => {
        this.pushMessage(msgPayload)

        if (this.$route.name !== 'chat' || this.$route.params.idUser !== msgPayload.from) {
          this.pushNotification(`${msgPayload.from} sent you a message`)
        }
      })
    },
  },

  mounted() {
    this.attachMessagesListener()
  },
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
