<script setup>
  import { ref } from 'vue'
  import { rainbowStop } from './rainbow.js'
  import HelloWorld from './components/HelloWorld.vue'
  import BoardGameList from './components/BoardGameList.vue'
  import UsersInput from './components/UsersInput.vue'
  import UsersDisplay from './components/UsersDisplay.vue'
  import GitHubIcon from './components/GitHubIcon.vue'

  const BGGusers = ref([])
  const gameInfo = ref([])

 var playerColours = [... Array(8).keys()].map(i => rainbowStop(i/8, 1, 0.5))
  playerColours.sort(() => Math.random() - 0.5);

</script>

<template>
  <header>
    <UsersInput v-model:games="gameInfo" v-model:users="BGGusers"/>
  </header>

  <main>
    <UsersDisplay v-model:users="BGGusers" :colours="playerColours" v-model:games="gameInfo"/>
    <BoardGameList :BGGusers="BGGusers" :gameInfo="gameInfo" :colours="playerColours"/>
  </main>

  <v-footer>
    <a href="https://github.com/SolarDrew/kallaxion.github.io"><img src="./assets/github-mark-white.png" width=40px/></a>
    <p>Copyright Drew Leonard 2025.</p>
    <p>Icons from <a href="https://game-icons.net">Game-icons.net</a> used under <a href="https://creativecommons.org/licenses/by/3.0/"> CC BY 3.0</a> license.</p>
  </v-footer>
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

  v-footer {
      display: flex;
      align-items: center;
      flex-direction: column;
  }
</style>
