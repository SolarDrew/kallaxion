<script setup>
  import { ref } from 'vue'
  import MeepleIcon from './MeepleIcon.vue'

  const props = defineProps({
    game: Object,
    players: Array,
  })
</script>

<template>
  <img :src="game.image"/>
  <h3 class="text">
    {{ game.name }}
  </h3>
  <p class="text">
    {{ game.minplayers }} - {{ game.maxplayers }} players
  </p>
</template>

<style scoped>
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
    text-align: center;
  }

  .text {
    display: flex;
    justify-content: center;
  }

  img {
    display: block;
    margin: auto;
  }
</style>

