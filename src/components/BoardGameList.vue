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
  <row container :gutter="12">
    <template v-for="game of gameInfo">
      <column :xs="12" :md="4" :lg="3"
        v-if="game.minplayers <= BGGusers.length && game.maxplayers >= BGGusers.length">
        <BoardGame :game="game" :players="BGGusers" :colours="colours"/>
      </column>
    </template>
  </row>
</template>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
