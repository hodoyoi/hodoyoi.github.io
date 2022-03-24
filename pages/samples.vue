<template lang="pug">
  .bg-white.py-5
    b-container
      h1.section-title 🐕 制作事例 🐕

      h3.sample-type
        | 既製品カスタマイズ
        b-badge.text-white.ml-2(variant="danger") オススメ
      .sample-type-description.mb-3
        | お客様との打ち合わせから、目的に合わせて最適なサービスや製品を選び、カスタマイズして納品いたします。<br/>
        | 細かいデザインや機能追加は行えませんが、コストパフォーマンスの高いサービスを提供いたします。<br/>
        | 汎用的・シンプルな業務用のツールなどにおすすめです。

      .row
        .col-6.col-md-4.col-lg-3
          b-img(src="~/assets/img/samples/kokyo.jpg" thumbnail fluid)
          .title 公共料金記録アプリ
          .description
            | スマートフォン用の簡単な記帳アプリです。
            | Googleスプレッドシートと連携して動作します。

        .col-6.col-md-4.col-lg-3
          b-img(src="~/assets/img/samples/nippo.jpg" thumbnail fluid)
          .title 作業日報アプリ
          .description
            | スマートフォン用の簡単な作業日報アプリです。
            | Googleスプレッドシートと連携して、写真のアップロードにも対応します。

      h3.sample-type.mt-5
        | 特注ソフトウェア
        b-badge.text-white.ml-2(variant="success") ほどよくオススメ
      .sample-type-description.mb-3
        | システム設計、開発、運用を全て自社で行い、ご要望に合わせて自由度の高いソフトウェアを制作いたします。<br/>
        | 特殊な業界向けのツールや、専門的な用途のあるシステムにおすすめです。

      .row
        .col-6.col-md-4.col-lg-3
          b-img(src="~/assets/img/samples/timecard.png" thumbnail fluid)
          .title シンプルタイムカード
          .description
            | スマートフォン用の簡単な勤怠記録ソフトです。高速に動作し、機能の追加や、他のシステムとの連携も可能です。

      h2.mt-5.section-title 🐕 制作実績 🐕
      .row
        .col-12.col-md-6.col-lg-4
          b-img(src="~/assets/img/samples/eccube-plugin-pic.png" thumbnail fluid)
          .title 特注制作 写真館向け EC-Cube4.0 プラグイン

        .col-12.col-md-6.col-lg-4
          b-img(src="~/assets/img/samples/ec-site.png" thumbnail fluid)
          .title 特注制作 プライベートECサイト

        .col-12.col-md-6.col-lg-4
          a.d-block(href="https://www.lilipeer.com/" target="_blank" rel="noopener")
            b-img(src="~/assets/img/samples/ar-app.png" thumbnail fluid)
            .title 一部制作 画像認識アプリ
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.sample-type {
  border-left: .5rem solid #28a745;
  padding-left: .75rem;
  border-bottom: 1px dotted #ccc;
  padding-bottom: .25rem;
}
.sample-type-description {
  color: #373737;
  font-size: 80%;
}
.title {
  margin-top: .5rem;
  text-align: center;
  color: #262626;
}
.description {
  color: #696969;
  font-size: 75%;
}
.badge {
  font-size: 50% !important;
}
</style>
