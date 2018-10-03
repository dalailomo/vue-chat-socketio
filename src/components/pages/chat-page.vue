<template>
  <div>
    <v-toolbar color="pink" dark>
      <v-toolbar-side-icon>
          <v-btn icon @click="onClick">
            <v-icon large>keyboard_arrow_left</v-icon>
          </v-btn>
      </v-toolbar-side-icon>
      <v-toolbar-title>Chat with <pre>{{ $route.params.idUser }}</pre></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <message v-for="(message, index) in messages"
      :key="index"
      :align="message.from === $route.params.idUser ? 'left' : 'right'"
      :message="message.text"
      v-if="message.to === $route.params.idUser || message.from === $route.params.idUser" />

    <v-footer fixed style="padding: 0 0 0 18px;">
        <v-text-field
          label="Message"
          v-model="msg"
        ></v-text-field>
        <v-btn small flat @click="sendMessage"><v-icon>send</v-icon></v-btn>
    </v-footer>
  </div>
</template>

<script>
import Message from '@/components/layout/message'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    'message': Message,
  },

  data() {
    return {
      msg: '',
    }
  },

  computed: {
    ...mapGetters(['messages', 'myClientId']),
  },

  methods: {
    ...mapActions(['pushMessage']),

    sendMessage() {
      const msgPayload = { from: this.$socket.id, to: this.$route.params.idUser, text: this.msg }

      this.pushMessage(msgPayload)
      this.$socket.emit('send-message', msgPayload)

      this.msg = ''
    },

    onClick() {
      this.$router.push({ name: 'home' })
    },
  },
}
</script>
