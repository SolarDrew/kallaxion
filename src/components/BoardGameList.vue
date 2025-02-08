<script async setup>
import { ref } from 'vue'
import BoardGame from './BoardGame.vue'
import PlayerPic from './PlayerPic.vue'
const { BGGusers } = defineProps({
  BGGusers: Array,
})

async function bggGet(url) {
  var res = await fetch(url)
  return res.text()
}

var gameIds = []
for (let i = 0; i < BGGusers.length; i++) {
    var BGG_COLLECTION_URL = 'https://boardgamegeek.com/xmlapi2/collection?username=' + BGGusers[i] + "&own=1&excludesubtype=boardgameexpansion"
    var res = await bggGet(BGG_COLLECTION_URL)
    var userGameIds = Array.from(
      new window.DOMParser().parseFromString(res, "text/xml").getElementsByTagName('item'))
      .map(game => game.attributes['objectid'].textContent)
    gameIds = gameIds.concat(userGameIds)
}
gameIds = await [...new Set(gameIds)]

var gameInfo = []
//await gameIds.map(
for (let i = 0; i < gameIds.length; i++) {
//  async function(gameId) {
    var GAME_INFO_URL = 'https://boardgamegeek.com/xmlapi2/thing?id=' + gameIds[i]
    res = await bggGet(GAME_INFO_URL)
    var info = new window.DOMParser().parseFromString(res, "text/xml")
    var game = {
      name: info.getElementsByTagName("name")[0].attributes["value"].textContent,
      minplayers: info.getElementsByTagName("minplayers")[0].attributes["value"].textContent,
      maxplayers: info.getElementsByTagName("maxplayers")[0].attributes["value"].textContent,
    }
    gameInfo.push(game)
}
//)

</script>

<template>
<div class="wrapper">
  <!--<PlayerPic :BGGuser="BGGuser"/>-->
  <row container :gutter="12">
    <template v-for="game of gameInfo">
      <column :xs="12" :md="4" :lg="3" 
        v-if="game.minplayers <= BGGusers.length && game.maxplayers >= BGGusers.length">
        <BoardGame :game="game"/>
      </column>
    </template>
  </row>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
