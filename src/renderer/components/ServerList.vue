<template>
  <div>
    <span class="title">
      Welcome to haul! Let's set up a static server!
    </span>
    <ul class="server-list">
      <server-listing v-for="(index, server) in serverList" :key="index" :port="8080"></server-listing>
    </ul>
  </div>
</template>

<script>
  import Server from './Server.vue'

  export default {
    name: 'server-list',
    data() {
      return {
        serverList: [
          'server1',
          'server2',
          'server3',
          'server4',
          'server5',
          'server6'
        ]
      }
    },
    components: { 'server-listing': Server },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link)
      },
      generatePort() {
        // TODO: Check for existing ports, bump by 1
        return 8080
      }
    }
  }
</script>
