<template>
  <div>
    <div class="container mx-auto">
      <img
        src="~/assets/img/top/hodoyoigk.png"
        alt="ほどよい合同会社"
        class="mx-auto max-h-128"
      />

      <h2 class="p-3 text-lg italic text-center border-b border-b-gray-light">
        ほどよい合同会社は、新潟県上越市に拠点を置く、ソフトウェアの特注開発を行う会社です。
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Appeal>なんでも開発業務</Appeal>
          <AppealText>
            業務管理システム、在庫管理システム、ARスマートフォンアプリ、決済連携機能付きECシステム、位置情報システム、ゲームアプリなど様々な分野での開発業務を行っております。<br />
            <b>高難度案件、サンプルの試作</b>も喜んでお受けいたします。
          </AppealText>

          <Appeal>シンプルさを追求</Appeal>
          <AppealText>
            お客様のご要望に対して、できる限り現実的でシンプルな解決方法を模索し、ご提案させて頂きます。<br />
            その結果、<b>そもそもシステム制作が不要になる</b>場合すらあります。おかげで儲かりません。
          </AppealText>
        </div>

        <div>
          <Appeal>キャンペーン</Appeal>
          <AppealText> 調査・サンプル試作 </AppealText>
        </div>

        <div>
          <Appeal>主要技術 / フレームワーク</Appeal>
          <ul class="tech text-sm">
            <li>
              <p>サーバサイド開発</p>
              <p>
                <b>Laravel</b>, CakePHP,
                <br />
                <b>Ruby on Rails</b>
              </p>
            </li>
            <li>
              <p>クライアントサイド開発</p>
              <p><b>React</b>, Next.js, Vue, Nuxt.js</p>
            </li>
            <li>
              <p>モバイル・ネイティブ開発</p>
              <p><b>React Native</b>, C#, Swift, Kotlin</p>
            </li>
            <li>
              <p>ゲーム開発</p>
              <p><b>Unity</b>, Phaser</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech {
  list-style: '🐾 ';
}
.tech li {
  margin-left: 2rem;
  margin-top: 1rem;
}
</style>

<script setup lang="ts">
import Appeal from '~/components/index/Appeal.vue'
import AppealText from '~/components/index/AppealText.vue'
</script>
