<template lang="pug">
  b-navbar(toggleable="lg" type="dark" variant="primary")
    b-container
      b-navbar-brand(to="/") ほどよい合同会社

      b-navbar-toggle(target="nav-collapse")

      b-collapse#nav-collapse(is-nav)
        b-navbar-nav
          b-nav-item(to="/samples")
            b-icon-grid3x3-gap-fill.mr-1
            | 制作事例・サンプル

          b-nav-item(to="/about")
            b-icon-house.mr-1
            | 会社概要

          b-nav-item(href="/contact")
            b-icon-envelope.mr-1
            | お問い合わせ
</template>

<script lang="ts">
import Vue from 'vue'
import HodoyoiLogo from '~/components/HodoyoiLogo.vue'

export default Vue.extend({
  components: { HodoyoiLogo }
})
</script>

<style scoped>
</style>
