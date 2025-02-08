<script setup>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import BoardGameList from './components/BoardGameList.vue'

const BGGusers = ["SolarDrew", "Cadair"]

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <!-- <button @click="getGames">Get games</button>
    <BoardGameList :games="data"></BoardGameList> -->
    <div>
      <Suspense>
        <BoardGameList :BGGusers="BGGusers"/>
      </Suspense>
      <!--<BoardGameList :BGGuser="BGGuser2"/>-->
    </div>
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
