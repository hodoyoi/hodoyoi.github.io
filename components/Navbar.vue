<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <b>HODOYOI G.K.</b>
      </a>

      <a role="button" class="navbar-burger" :class="{'is-active': isOpen}" aria-label="menu" aria-expanded="false" data-target="mainNavbar" @click='isOpen = !isOpen'>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="mainNavbar" class="navbar-menu" :class="{'is-active': isOpen}">
      <div class="navbar-start">
        <a class="navbar-item" href="/abount">
          会社概要
        </a>
        <a class="navbar-item" href="/samples">
          制作事例
        </a>
        <a class="navbar-item" href="/school">
          プログラミングスクール
        </a>
      </div>
    </div>
  </nav>
</template>
<script setup lang='ts'>
let isOpen = false
</script>
