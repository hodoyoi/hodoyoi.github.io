<template lang="pug">
  .bg-white.pt-3
    .container
      .row
        .col-12
          iframe.google-form(src="https://docs.google.com/forms/d/e/1FAIpQLSfwgy--ZeRiHTlfcIygVWGf8XrH2bVXOL7Hgs3Oc4_9W2BK2Q/viewform?embedded=true") 読み込んでいます…
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.google-form {
  border: 0;
  width: 100%;
  min-height: 850px;
}
</style>
