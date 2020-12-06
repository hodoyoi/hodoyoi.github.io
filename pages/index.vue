<template lang="pug">
  div
    .py-5.bg-white
      b-container
        b-row.align-items-center
          b-col(md="4").text-center
            h1.hero ほどよく<br/>シンプルで<br/>かんたんな<br/>システムを作る
          b-col(md="8")
            b-img(src="~/assets/img/top.png" fluid)

    //.py-5.bg-light
      b-container
        b-row.align-content-between
          b-col(md="4")
            h2 アプリ制作
          b-col(md="4")
            h2 ITシステム相談
          b-col(md="4")
            h2 プログラミング教育

    //.py-5
      .container.text-center
        h1 かんたんなシステムを作る
        p
          | 改善を最低限から始めましょう。<br/>
          | ほどよい合同会社は、複数の目的を持ったシステムをお勧めしません。<br/>
          | あまりに複雑で、誰も使ってくれないためです。<br/>
          nuxt-link(to="/contact") ご相談はこちらから。

        h1 安いシステムを作る
        p
          | こだわりを絞って、必要な価値のみ追求しましょう。<br/>
          | ほどよい合同会社は、できるだけ既製品で問題を解決することを推奨しています。<br/>
          | システムを作るより手順書を配る方が安いためです。<br/>
          nuxt-link(to="/contact") ご相談はこちらから。

        h1 システムを組み合わせる
        p
          | 目的を分解して、小さいシステムに割り振りましょう。<br/>
          | 使わないシステムを捨てて、使っているシステムのみ強化しましょう。<br/>
          | ほどよい合同会社は、そのお手伝いをします。<br/>
          nuxt-link(to="/contact") ご相談はこちらから。

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>

<style scoped>
.hero {
  color: white;
  text-shadow: 2px 2px 1px #55794e,
  -2px 2px 1px #55794e,
  2px -2px 1px #55794e,
  -2px -2px 1px #55794e,
  2px 0 1px #55794e,
  0 2px 1px #55794e,
  -2px 0 1px #55794e,
  0 -2px 1px #55794e;
  /*font-family: "PixelMplus10 Regular", serif;*/
  font-weight: bold;
  font-size: 3rem;
  line-height: 1.6;
}
</style>
