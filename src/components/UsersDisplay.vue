<script setup>
  import MeepleIcon from './MeepleIcon.vue'
  const props = defineProps({
    users: Array,
    colours: Array,
  })
</script>

<template>
  <div class=userrow>
    <div v-for="player, item of users" class="user">
      <MeepleIcon :fill="colours[item]"/>
      <p>{{ player.name }}</p>
    </div>
  </div>
</template>

<style scoped>
  .userrow {
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
  }

  .user {
    display: flex;
    flex-direction: column;
    flex-basis: 100px;
  }

  p {
    align-self: center;
  }
</style>
