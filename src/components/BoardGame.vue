<script setup>
import { ref } from 'vue'
import MeepleIcon from './MeepleIcon.vue'
import MeepleGroupIcon from './MeepleGroupIcon.vue'

  const props = defineProps({
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
    <MeepleIcon :fill="colours[item]" v-if="game.owners.includes(player.name)"/>
    <MeepleIcon :fill="'white'" v-else/>
  </div>
  <div v-for="item of Math.min(game.maxplayers, 7)-players.length" class="meepleicon">
    <MeepleIcon :fill="'black'"/>
  </div>
  <div class="meepleicon">
    <MeepleGroupIcon v-if="game.maxplayers > 7"/>
    <MeepleIcon :fill="'black'" v-else-if="game.maxplayers == 8"/>
  </div>
</div>
<div class="hovertext">
  <p>{{ players.length }} of {{ game.minplayers }} - {{ game.maxplayers }} players</p>
  <p>Owned by: <p v-for="player of game.owners">{{ player }}</p></p>
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

  .hovertext {
      display: none;
      position: absolute;
      text-align: center;
      z-index: 1;
      background-color: darkslategrey;
      color: ghostwhite;
  }

  .playersrow:hover + .hovertext {
      display: block;
  }

  .meepleicon {
    display: flex;
    flex-basis: 30px;
  }
</style>

