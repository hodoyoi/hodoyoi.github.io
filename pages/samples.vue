<template>
  <div class="bg-white py-5">
    <b-container>
      <h1 class="section-title">🐕 制作事例 🐕</h1>
      <h3 class="sample-type">既製品カスタマイズ<b-badge class="text-white ml-2" variant="danger">オススメ</b-badge>
      </h3>
      <div class="sample-type-description mb-3">お客様との打ち合わせから、目的に合わせて最適なサービスや製品を選び、カスタマイズして納品いたします。<br />
        細かいデザインや機能追加は行えませんが、コストパフォーマンスの高いサービスを提供いたします。<br />
        汎用的・シンプルな業務用のツールなどにおすすめです。</div>
      <div class="row">
        <div class="col-6 col-md-4 col-lg-3">
          <b-img src="~/assets/img/samples/kokyo.jpg" thumbnail="thumbnail" fluid="fluid"></b-img>
          <div class="title">公共料金記録アプリ</div>
          <div class="description">スマートフォン用の簡単な記帳アプリです。
            Googleスプレッドシートと連携して動作します。</div>
        </div>
        <div class="col-6 col-md-4 col-lg-3">
          <b-img src="~/assets/img/samples/nippo.jpg" thumbnail="thumbnail" fluid="fluid"></b-img>
          <div class="title">作業日報アプリ</div>
          <div class="description">スマートフォン用の簡単な作業日報アプリです。
            Googleスプレッドシートと連携して、写真のアップロードにも対応します。</div>
        </div>
      </div>
      <h3 class="sample-type mt-5">特注ソフトウェア<b-badge class="text-white ml-2" variant="success">ほどよくオススメ</b-badge>
      </h3>
      <div class="sample-type-description mb-3">システム設計、開発、運用を全て自社で行い、ご要望に合わせて自由度の高いソフトウェアを制作いたします。<br />
        特殊な業界向けのツールや、専門的な用途のあるシステムにおすすめです。</div>
      <div class="row">
        <div class="col-6 col-md-4 col-lg-3">
          <b-img src="~/assets/img/samples/timecard.png" thumbnail="thumbnail" fluid="fluid"></b-img>
          <div class="title">シンプルタイムカード</div>
          <div class="description">スマートフォン用の簡単な勤怠記録ソフトです。高速に動作し、機能の追加や、他のシステムとの連携も可能です。</div>
        </div>
      </div>
      <h2 class="mt-5 section-title">🐕 制作実績 🐕</h2>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <b-img src="~/assets/img/samples/eccube-plugin-pic.png" thumbnail="thumbnail" fluid="fluid"></b-img>
          <div class="title">特注制作 写真館向け EC-Cube4.0 プラグイン</div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <b-img src="~/assets/img/samples/ec-site.png" thumbnail="thumbnail" fluid="fluid"></b-img>
          <div class="title">特注制作 プライベートECサイト</div>
        </div>
        <div class="col-12 col-md-6 col-lg-4"><a class="d-block" href="https://www.lilipeer.com/" target="_blank" rel="noopener">
          <b-img src="~/assets/img/samples/ar-app.png" thumbnail="thumbnail" fluid="fluid"></b-img>
          <div class="title">一部制作 画像認識アプリ</div>
        </a></div>
      </div>
    </b-container>
  </div>
</template>

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
