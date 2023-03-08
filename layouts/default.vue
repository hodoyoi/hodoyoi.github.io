<template>
  <div>
    <header>
      <GlobalHeader />
    </header>
    <main class="py-10">
      <NuxtPage />
    </main>
    <footer class="py-10">
      <GlobalFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '~/components/shared/GlobalHeader.vue'
import GlobalFooter from '~/components/shared/GlobalFooter.vue'
</script>
