<script setup>
const { BGGuser } = defineProps({
    BGGuser: String,
})
</script>

<template>
  <header>{{ BGGuser }}</header>
</template>

<style scoped>
header {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}
</style>
