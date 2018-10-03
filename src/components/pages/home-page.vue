<template>
  <v-card>
    <v-card-title><h1>Hello there!</h1></v-card-title>
    <v-card-text>
      <pre>My id: {{ myClientId }}</pre>
    </v-card-text>
    <v-divider />
    <v-card-text>
      <user-list />
    </v-card-text>
  </v-card>
</template>

<script>
import UserList from '@/components/layout/user-list'
import { mapGetters } from 'vuex'

export default {
  components: {
    'user-list': UserList,
  },

  computed: {
    ...mapGetters(['myClientId']),
  },
}
</script>
