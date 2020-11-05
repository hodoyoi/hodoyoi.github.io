<template lang="pug">
  .bg-primary
    b-container
      b-navbar(type="dark")
        b-navbar-brand(to="/") ほどよい合同会社

        b-navbar-toggle(target="nav-collapse")

        b-collapse#nav-collapse(is-nav)
          b-navbar-nav
            b-nav-item(to="/samples") サンプル集
            b-nav-item(href="/contact") お問い合わせ
</template>
