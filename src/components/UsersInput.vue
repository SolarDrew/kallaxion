<script setup>
import { ref } from 'vue'

const player = ref(null)
const BGGusers = defineModel('users')
const gameInfo = defineModel('games')

function bggGet(url, n_tries=1) {
    var res = fetch(url)
        .then(res => res.text())
        .then(res => new window.DOMParser().parseFromString(res, "text/xml"))
        .catch(error => {
            if (n_tries === 5) throw error
            // Timeout on empty function because setTimeout doesn't return the function result
            setTimeout(() => {bggGet(url, n_tries + 1)}, 1000 * Math.pow(2, n_tries))
        })
    return res
}

function getGameFromId(id, player) {
    var GAME_INFO_URL = 'https://boardgamegeek.com/xmlapi2/thing?id=' + id
    bggGet(GAME_INFO_URL)
        .then(info => {
            var game = {
                name: info.getElementsByTagName("name")[0].attributes["value"].textContent,
                minplayers: info.getElementsByTagName("minplayers")[0].attributes["value"].textContent,
                maxplayers: info.getElementsByTagName("maxplayers")[0].attributes["value"].textContent,
                image: info.getElementsByTagName("thumbnail")[0].textContent,
                id: id,
                owners: [player.name],
                url: "https://boardgamegeek.com/boardgame/" + id,
            }
            return game
        })
        .then(game => {
            player.games.value.push(game)
            return game
        })
        .then(game => {
            var gameIds = gameInfo.value.map(game => game.id)
            if (gameIds.includes(game.id)) {
                const idx = gameIds.indexOf(game.id)
                gameInfo.value[idx].owners.push(player.name)
            }
            else {
                gameInfo.value.push(game)
                gameInfo.value.sort((a, b) => a.name.localeCompare(b.name));
            }
        })
}

function getPlayerCollection(player) {
    var BGG_COLLECTION_URL = 'https://boardgamegeek.com/xmlapi2/collection?username=' + player.name + "&own=1&excludesubtype=boardgameexpansion"
    bggGet(BGG_COLLECTION_URL)
        .then(res => Array.from(res.getElementsByTagName('item'))
              .map(game => game.attributes['objectid'].textContent)
              .map(id => getGameFromId(id, player))
             )
        .catch(error => {
            player.loadingCollection.value = false
            player.loadingFailed.value = true
        })
        .then(games => player.loadingCollection.value = false)
}

function addPlayer (playerName) {
    var newPlayer = {
        name: playerName,
        games: ref([]),
        loadingCollection: ref(true),
        loadingFailed: ref(false),
    }
    getPlayerCollection(newPlayer)
    BGGusers.value.push(newPlayer)
}
</script>

<template>
  <div class="input">
    <input v-model="player" placeholder="Choose a player!" @keyup.enter="addPlayer(player)"/>
    <button @click="addPlayer(player)">Add Player</button>
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
