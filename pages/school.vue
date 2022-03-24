<template lang='pug'>
  .bg-white.py-5
    .container
      h1 プログラミングスクール

      p.small
        | 2022年度から、高等学校でプログラミング教育が必修項目となりました。<br>
        | コンピュータを用いた情報技術の取り扱いはもはや現代社会に生きる私たちの生活に欠かせない要素の一つです。<br>
        | ほどよい合同会社では、特にウェブ関連技術に専門性を高めたプログラミングレッスンを行っています。<br>

      h2.mt-5 特徴
      ul
        li 開発環境完備
        li 現役エンジニアが技術を解説
        li 少人数またはマンツーマン形式の学習

      h2.mt-5 コース案内

      b-card.mt-3(no-body)
        b-row
          b-col(md='4')
            b-card-img(src='~/assets/img/school/wakaba.jpg')
          b-col(md='8')
            b-card-body
              h3 ゆるプログラミングコース
              | プログラミングに初めて触れる方や、新しい趣味を見つけたい方のために、ブラウザ上で動作するシンプルなアプリやゲームを作りながら、コンピュータサイエンスの基礎を学びます。
              br
              .text-right
                small 開発言語: Javascript
              hr
              div 頻度: 週1回 <small>(2時間)</small>
              div 費用: 4万円 <small>／月</small>

      b-card.mt-3(no-body)
        b-row
          b-col.order-1.order-md-0(md='8')
            b-card-body
              h3 ウェブ開発専門コース
              | これから職業としてWebプログラミングに取り組みたい方や、社内のIT業務の効率化を求める方のために、開発に必要なインフラ技術や仮想環境の整備、データベースの知識を学習します。
              br
              .text-right
                small 開発言語: PHP, C#
              hr
              div 頻度: 週1回 <small>(3時間)</small>
              div 費用: 6万円 <small>／月</small>
          b-col.order-0.order-md-1(md='4')
            b-card-img(src='~/assets/img/school/lang.jpg')

      b-card.mt-3(no-body)
        b-row
          b-col(md='4')
            b-card-img(src='~/assets/img/school/3dprint.jpg')
          b-col(md='8')
            b-card-body
              h3 ものづくりコース
              | 3Dプリンタと専用ソフトを使った小物づくりや、IoTセンサーとプログラミング教材を利用して、コンピュータと現実が交わる世界で新しい発想のものづくりを体験します。
              br
              .text-right
                small 開発言語: Python
              hr
              div 頻度: 月2回 <small>(4時間)</small>
              div 費用: 3万円 <small>／月</small>

      h2.mt-5 アクセス
      p 新潟県上越市南新町1-3 アシスト上越マンション3 405号室 <small>(駐車場は現在準備中です)</small>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1361.352911528114!2d138.2443168484808!3d37.099484908304056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff6714a1e1b5b5d%3A0xe70c11a85b90c73d!2s1-3%20Minamishinmachi%2C%20Joetsu%2C%20Niigata%20943-0847!5e0!3m2!1sen!2sjp!4v1648088550107!5m2!1sen!2sjp" class="map" allowfullscreen="" loading="lazy"></iframe>


      h2.mt-5 割引制度
      ul
        li 障碍者補助 ... 障害者手帳をお持ちの方はご相談ください。
        li 不登校補助 ... 事情があり不登校またはそれに準ずる状態の方はご相談ください。

      .text-center.mt-5
        b-btn(variant='primary' size='lg' href='/contact').text-white お問い合わせはこちら
</template>

<script>
export default {
  name: 'school'
}
</script>

<style scoped>
.map {
  height: 400px;
  width: 100%;
  border: 0;
}
</style>
