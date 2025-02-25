<script setup>
  import { ref } from 'vue'
  import { rainbowStop } from './rainbow.js'
  import HelloWorld from './components/HelloWorld.vue'
  import BoardGameList from './components/BoardGameList.vue'
  import UsersInput from './components/UsersInput.vue'
  import UsersDisplay from './components/UsersDisplay.vue'

  const BGGusers = ref([])
  const gameInfo = ref([])

  var playerColours = [... Array(10).keys()].map(i => rainbowStop(i/10, 1, 0.5))
  playerColours.sort(() => Math.random() - 0.5);
  console.log(playerColours)

</script>

<template>
  <header>
    <Suspense><UsersInput v-model:games="gameInfo" v-model:users="BGGusers"/></Suspense>
  </header>

  <main>
    <UsersDisplay :users="BGGusers" :colours="playerColours"/>
    <BoardGameList :BGGusers="BGGusers" :gameInfo="gameInfo"/>
  </main>
</template>

<style scoped>
  header {
    line-height: 1.5;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      justify-content: space-evenly;
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
</style>
