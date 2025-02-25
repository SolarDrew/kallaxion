<script setup>
  import { ref } from 'vue'

  const player = ref(null)
  const BGGusers = defineModel('users')
  const gameInfo = defineModel('games')

  function addPlayer (player) {
    var players = BGGusers.value
    players.push({
      name: player
    })
    BGGusers.value = players
    player = ''
  }

  async function bggGet(url) {
    var res = await fetch(url)
    return res.text()
  }

  async function updateGameInfo(newPlayer) {
    addPlayer(newPlayer)

    var gameIds = []
    for (let i = 0; i < BGGusers.value.length; i++) {
      var BGG_COLLECTION_URL = 'https://boardgamegeek.com/xmlapi2/collection?username=' + BGGusers.value[i].name + "&own=1&excludesubtype=boardgameexpansion"
      var res = await bggGet(BGG_COLLECTION_URL)
      var userGameIds = Array.from(
        new window.DOMParser().parseFromString(res, "text/xml").getElementsByTagName('item'))
        .map(game => game.attributes['objectid'].textContent)
      gameIds = gameIds.concat(userGameIds)
    }
    gameIds = await [...new Set(gameIds)]

    var allInfo = []
    for (let i = 0; i < gameIds.length; i++) {
        var GAME_INFO_URL = 'https://boardgamegeek.com/xmlapi2/thing?id=' + gameIds[i]
        res = await bggGet(GAME_INFO_URL)
        var info = new window.DOMParser().parseFromString(res, "text/xml")
        var game = {
          name: info.getElementsByTagName("name")[0].attributes["value"].textContent,
          minplayers: info.getElementsByTagName("minplayers")[0].attributes["value"].textContent,
          maxplayers: info.getElementsByTagName("maxplayers")[0].attributes["value"].textContent,
          image: info.getElementsByTagName("thumbnail")[0].textContent,
        }
        allInfo.push(game)
    }
    gameInfo.value = allInfo
  }

</script>

<template>
  <div class="input">
    <input v-model="player" placeholder="Choose a player!" @keyup.enter="updateGameInfo(player)"/>
    <button @click="updateGameInfo(player)">Add Player</button>
  </div>
</template>

<style scoped>
  .input {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding-top: 50px
  }
</style>
