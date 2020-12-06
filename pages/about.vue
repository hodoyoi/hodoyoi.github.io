<template lang="pug">
  .bg-white.py-5
    b-container
      h1.mb-3.text-center.border-bottom 会社概要
      b-row
        b-col(md="6")
          b-row
            b-col.head(md="4")
              | 商号
            b-col.body(md="8")
              | ほどよい合同会社 (Hodoyoi G.K.)
          b-row
            b-col.head(md="4")
              | 本社所在地
            b-col.body(md="8")
              | 〒943-0841<br/>新潟県上越市南本町2-1-4
          b-row
            b-col.head(md="4")
              | お問い合わせ先
            b-col.body(md="8")
              | TEL: 080-3701-3570<br/>
              nuxt-link(to="/contact") お問い合わせフォーム
          b-row
            b-col.head(md="4")
              | 代表社員
            b-col.body(md="8")
              | 家崎 元
          b-row
            b-col.head(md="4")
              | 設立日
            b-col.body(md="8")
              | 令和2年3月26日
          b-row
            b-col.head(md="4")
              | 資本金
            b-col.body(md="8")
              | 50万円
        b-col(md="6")
          b-img.photo(src="~/assets/img/shiba.jpg" fluid)
          p.text-center.small.mt-2 代表社員とその犬
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
.head {
  font-weight: bold;
}
.body {
  margin-bottom: 1rem;
}
.photo {
  border: 1px solid #ccc;
  border-radius: .25rem;
  padding: .25rem;
}

</style>
