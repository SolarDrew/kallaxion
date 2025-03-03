<script setup>
  import { ref } from 'vue'
  import MeepleIcon from './MeepleIcon.vue'

  const props = defineProps({
    game: Object,
    players: Array,
    colours: Array
  })
</script>

<template>
  <img :src="game.image"/>
  <h3 class="text">
    {{ game.name }}
  </h3>
  <div class="playersrow">
    <div v-for="player, item of players" class="meepleicon">
      <MeepleIcon :fill="colours[item]"/>
    </div>
    <div v-for="item of Math.min(game.maxplayers, 8)-players.length" class="meepleicon">
      <MeepleIcon :fill="'black'"/>
    </div>
  </div>
</template>

<style scoped>
  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
    color: var(--color-heading);
    text-align: center;
  }

  img {
    display: block;
    margin: auto;
  }

  .playersrow {
    display: flex;
    justify-content: center;
  }

  .meepleicon {
    display: flex;
    flex-basis: 30px;
  }
</style>

