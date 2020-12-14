<template lang="pug">
  .bg-white.py-5
    b-container
      h1.mb-3.text-center.border-bottom 制作事例・サンプル
      .row
        .col-6.col-md-4.col-lg-3
          a.d-block(href="https://www.appsheet.com/start/d5dc9191-1183-453c-92e1-838fe02aceff" target="_blank" rel="noopener")
            b-img(src="~/assets/img/examples/kokyo.jpg" fluid)
          .title 公共料金記録アプリ
          .description
            | スマートフォン用の簡単な記帳アプリです。
            | Googleスプレッドシートと連携して動作します。

        .col-12.col-md-4.col-lg-3
          a.d-block(href="https://www.appsheet.com/start/9ecd6d51-8d1b-4b2a-90d6-9b4faa2b9207" target="_blank" rel="noopener")
            b-img(src="~/assets/img/examples/nippo.jpg" fluid)
          .title 作業日報アプリ
          .description
            | スマートフォン用の簡単な作業日報アプリです。
            | Googleスプレッドシートと連携して動作します。
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.title {
  margin-top: .5rem;
  text-align: center;
  color: #262626;
  /*font-weight: bold;*/
}
.description {
  color: #696969;
  font-size: 75%;
}
</style>
