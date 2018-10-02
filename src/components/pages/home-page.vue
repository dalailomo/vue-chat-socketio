<template>
  <v-card>
    <v-card-title><h1>Hello there!</h1><pre>{{ myClientId }}</pre></v-card-title>
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
