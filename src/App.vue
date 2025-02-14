<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import BoardGameList from './components/BoardGameList.vue'

const player = ref(null)
const BGGusers = ref([])

function addPlayer (player) {
  var players = BGGusers.value
  players.push(player)
  BGGusers.value = players
  player = ''
}

</script>

<template>
  <header>
  </header>

  <main>
    <p>Players: <template v-for="name of BGGusers"> {{ name }} </template></p>
    <input v-model="player" placeholder="Choose a player!" @keyup.enter="addPlayer(player)"/>
    <button @click="addPlayer(player)">Add Player</button>
    <Suspense><BoardGameList :BGGusers="BGGusers"/></Suspense>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.userrow {
  display: flex;
  justify-content: space-evenly;

}
</style>
