<template lang="pug">
  div
    .my-5.py-5
      .container
        .row.align-items-center
          .col-12.col-md-4.text-center
            h1.hero シンプルで<br/>小さくて<br/>かんたんな<br/>アプリを作る

          .col-12.col-md-8.text-center
            b-img(src="~/assets/img/640x360.png" fluid)

    .bg-white.py-5.my-5
      .container.text-center
        h1 なんでもやらないシステムを作る
        p
          | 改善を最低限から始めましょう。<br/>
          | ほどよい合同会社は、複数の目的を持ったシステムをお勧めしません。<br/>
          | あまりに複雑で、誰も使ってくれないためです。<br/>
          nuxt-link(to="/contact") ご相談はこちらから。

        h1 安いシステムを作る
        p
          | こだわりを絞って、生まれる価値のみ追求しましょう。<br/>
          | ほどよい合同会社は、既製品を組み合わせて問題を解決することを推奨しています。<br/>
          | システムを作るより手順書を作った方が安いためです。<br/>
          nuxt-link(to="/contact") ご相談はこちらから。

    // b-btn(variant="primary") Button
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.hero {
  color: white;
  text-shadow: 2px 2px 1px #003366,
  -2px 2px 1px #003366,
  2px -2px 1px #003366,
  -2px -2px 1px #003366,
  2px 0 1px #003366,
  0 2px 1px #003366,
  -2px 0 1px #003366,
  0 -2px 1px #003366;
  font-family: "PixelMplus10 Regular", serif;
  font-size: 3rem;
  line-height: 1.6;
}
</style>
