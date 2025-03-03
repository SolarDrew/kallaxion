<script setup>
  import { watch } from 'vue'
  import BoardGame from './BoardGame.vue'
  import PlayerPic from './PlayerPic.vue'
  const props = defineProps({
    BGGusers: Array,
    gameInfo: Array,
    colours: Array,
  })

</script>

<template>
<div v-if="BGGusers.length > 0">
  <row container :gutter="12">
    <template v-for="game of gameInfo">
      <column :xs="12" :md="4" :lg="3"
        v-if="game.minplayers <= BGGusers.length && game.maxplayers >= BGGusers.length">
        <BoardGame :game="game" :players="BGGusers" :colours="colours"/>
      </column>
    </template>
  </row>
</div>
<div v-else class="text">
  <h1>Welcome to Ludos!</h1>
  <h3>Here to help you choose a game</h3>

  <p>To get started, type your BoardGameGeek username into the box above to fetch your collection and see which of your games you can play solo.</p>
  <p>Add more users and the games available to you will adjust based on that player count.</p>
</div>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .text {
      text-align: center;
  }

  p {
      padding: 20px;
  }
</style>
