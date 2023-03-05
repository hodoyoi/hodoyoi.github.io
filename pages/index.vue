<template>
  <div>
    <div class="bg-white py-lg-5 py-3">
      <b-container>
        <b-row class="align-items-center" no-gutters="no-gutters">
          <b-col class="text-center" md="5" lg="4">
            <h1 class="hero">シンプルで<br />かんたんな<br />アプリを作る</h1>
          </b-col>
          <b-col md="7" lg="8">
            <b-img src="~/assets/img/top/hodoyoigk.png" fluid="fluid"></b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="py-5 bg-light">
      <b-container>
        <b-row>
          <b-col md="6" lg="8">
            <b-card border-variant="light">
              <h2>新潟県上越市に拠点を置く、コンピュータシステムの特注開発専門会社です。</h2>
              <hr />
              <p>ほどよい合同会社では、以下の言語・フレームワークを使用した開発を行っています。<br />また、リモートによる開発業務のお手伝いも承ります。</p>
              <ul>
                <li><b>サーバサイドアプリケーション</b>
                  <div class="small">
                    <b-badge class="text-white mr-2" variant="primary">PHP</b-badge><b>Laravel 8</b>, CakePHP 3
                  </div>
                  <div class="small">
                    <b-badge class="text-white mr-2" variant="primary">Ruby</b-badge>Ruby on Rails 6
                  </div>
                </li>
                <li class="mt-3"><b>クライアントサイドアプリケーション</b>
                  <div class="small">
                    <b-badge class="text-white mr-2" variant="primary">Javascript, Typescript</b-badge>Vue, Nuxt.js, React
                  </div>
                </li>
                <li class="mt-3"><b>モバイル・ネイティブアプリケーション</b>
                  <div class="small">
                    <b-badge class="text-white mr-2" variant="primary">Kotlin</b-badge>Android ネイティブ開発
                  </div>
                  <div class="small">
                    <b-badge class="text-white mr-2" variant="primary">Typescript</b-badge>React Native
                  </div>
                </li>
              </ul>
            </b-card>
          </b-col>
          <b-col md="6" lg="4">
            <b-card border-variant="light" title="🐶 お知らせ 🐶">
              <ul>
                <li><a href="https://hodoyoi.official.ec/" target="_blank" rel="noopener">公式ECショップ</a>ができました</li>
                <li>ホームページができました</li>
              </ul>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

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
