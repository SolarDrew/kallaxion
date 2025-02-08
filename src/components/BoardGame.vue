<script setup>
import { ref } from 'vue'
const { gameId } = defineProps({
  game: Object,
})

</script>

<template>
    <h3>
      {{ game.name }}
    </h3>
    <p>
      {{ game.minplayers }} - {{ game.maxplayers }} players
    </p>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>

