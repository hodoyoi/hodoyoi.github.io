<template>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-container>
      <b-navbar-brand to="/">ほどよい合同会社</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav="is-nav">
        <b-navbar-nav>
          <b-nav-item to="/samples">
            <b-icon-grid3x3-gap-fill class="mr-1"></b-icon-grid3x3-gap-fill>
            制作事例
          </b-nav-item>
          <b-nav-item to="/school">
            <b-icon-pen class="mr-1"></b-icon-pen>
            プログラミングスクール
          </b-nav-item>
          <b-nav-item to="/about">
            <b-icon-house class="mr-1"></b-icon-house>
            会社概要
          </b-nav-item>
          <b-nav-item href="/contact">
            <b-icon-envelope class="mr-1"></b-icon-envelope>
            お問い合わせ
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<style scoped>
</style>
