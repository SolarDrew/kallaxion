<script setup>
  import { ref } from 'vue'
  import MeepleIcon from './MeepleIcon.vue'

  const player = defineModel('player')

  const props = defineProps({
    userColour: String,
  })

  console.log(player.games)
</script>

<template>
  <div class="user">
 </div>
</template>

<style scoped>
</style>
