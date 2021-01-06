<template lang="pug">
  div
    .bg-white.py-lg-5.py-3
      b-container
        b-row(no-gutters).align-items-center
          b-col(md="5" lg="4").text-center
            h1.hero シンプルで<br/>かんたんな<br/>アプリを作る
          b-col(md="7" lg="8")
            b-img(src="~/assets/img/top/hodoyoigk.png" fluid)

    .py-5.bg-light
      b-container
        b-row
          b-col(md="6" lg="8")
            b-card(border-variant="light")
              h2 ウェブアプリケーション開発業務
              hr
              p ほどよい合同会社では、以下の言語・フレームワークを使用した開発を行っています。<br/>また、リモートによる開発業務のお手伝いも承ります。
              ul
                li
                  b サーバサイドアプリケーション
                  .small
                    b-badge(variant="primary").text-white.mr-2 PHP
                    b Laravel 8
                    |, CakePHP 3
                  .small
                    b-badge(variant="primary").text-white.mr-2 Ruby
                    | Ruby on Rails 6

                li.mt-3
                  b クライアントサイドアプリケーション
                  .small
                    b-badge(variant="primary").text-white.mr-2 Javascript, Typescript
                    | Vue, Nuxt.js, React

                li.mt-3
                  b モバイル・ネイティブアプリケーション
                  .small
                    b-badge(variant="primary").text-white.mr-2 Kotlin
                    | Android ネイティブ開発
                  .small
                    b-badge(variant="primary").text-white.mr-2 Typescript
                    | React Native

          b-col(md="6" lg="4")
            b-card(border-variant="light" title="🐶 お知らせ 🐶")
              ul
                li
                  a(href="https://hodoyoi.official.ec/" target="_blank" rel="noopener") 公式ECショップ
                  | ができました
                li ホームページができました

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
  line-height: 1.5;
  font-size: 2rem;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .hero {
    font-size: 2.6rem;
  }
}

ul {
  list-style: "🐾 ";
}

</style>
