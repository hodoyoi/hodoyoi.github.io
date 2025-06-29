<template>
  <div class="bg-white py-5">
    <b-container>
      <h1 class="section-title">🦮 会社概要 🦮</h1>
      <b-row>
        <b-col md="6">
          <b-row>
            <b-col class="head" md="4">商号</b-col>
            <b-col class="body" md="8">ほどよい合同会社 (Hodoyoi G.K.)</b-col>
          </b-row>
          <b-row>
            <b-col class="head" md="4">本社所在地</b-col>
            <b-col class="body" md="8">〒943-0841<br />新潟県上越市南本町2-1-4</b-col>
          </b-row>
          <b-row>
            <b-col class="head" md="4">お問い合わせ先</b-col>
            <b-col class="body" md="8"
              >TEL: 080-3701-3570<br />
              <nuxt-link to="/contact">お問い合わせフォーム</nuxt-link>
            </b-col>
          </b-row>
          <b-row>
            <b-col class="head" md="4">代表社員</b-col>
            <b-col class="body" md="8">家崎 元</b-col>
          </b-row>
          <b-row>
            <b-col class="head" md="4">設立日</b-col>
            <b-col class="body" md="8">令和2年3月26日</b-col>
          </b-row>
          <b-row>
            <b-col class="head" md="4">資本金</b-col>
            <b-col class="body" md="8">50万円</b-col>
          </b-row>
        </b-col>
        <b-col md="6">
          <b-img class="photo" src="~/assets/img/about/shiba.jpg" fluid="fluid"></b-img>
          <p class="text-center small mt-2">代表社員とその犬</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.head {
  font-weight: bold;
}

.body {
  margin-bottom: 1rem;
}

.photo {
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.25rem;
}
</style>
