<template>
  <ul class="text-sm">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'AppealUL',
};
</script>

<style scoped>
ul {
  /*list-style: '🐾 ';*/
  list-style-position: inside;
}
li {
  margin-left: 2rem;
  margin-top: 1rem;
}
</style>
