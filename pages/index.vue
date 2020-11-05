<template lang="pug">
  div
    .my-5.py-5
      .container
        .row.align-items-center
          .col-12.col-md-4.text-center
            h1.hero シンプルで<br/>かんたんな<br/>アプリを作る
          .col-12.col-md-4.text-center
            HodoyoiLogo

    .bg-white.py-5.my-5
      .container.text-center
        Logo.mt-5

    // b-btn(variant="primary") Button
</template>

<script lang="ts">
import Vue from 'vue'
import HodoyoiLogo from '~/components/HodoyoiLogo.vue'

export default Vue.extend({
  components: { HodoyoiLogo }
})
</script>
