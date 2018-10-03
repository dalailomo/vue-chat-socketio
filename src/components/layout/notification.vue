<template>
  <v-snackbar
    :timeout="3000"
    top
    v-model="visible"
  >
    {{ notification }}
    <v-btn flat color="pink" @click.native="visible = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['notification', 'isVisible']),

    visible: {
      get: function() {
        return this.isVisible
      },
      set: function(newValue) {
        this.setNotificationVisibility(newValue)
      },
    },
  },

  methods: {
    ...mapActions(['setNotificationVisibility']),
  },
}
</script>
