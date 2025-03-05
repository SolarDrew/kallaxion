<script setup>
import MeepleIcon from './MeepleIcon.vue'
import HourglassIcon from './HourglassIcon.vue'
import SkullIcon from './SkullIcon.vue'
const users = defineModel('users')
const props = defineProps({
    colours: Array,
  })
</script>

<template>
<div class="userrow">
  <div v-for="player, idx of users" class=user>
    <MeepleIcon :fill="colours[idx]" class="meeple"/>
    <HourglassIcon v-if="player.loadingCollection" class="icon"/>
    <SkullIcon class="skullicon" @click="removePlayer(player)"/>
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
    position: relative;
    top: 0;
    left: 0;
}

p {
    align-self: center;
}

.icon {
    position: absolute;
    top: 25px;
    left: 25px;
    width: 50px;
    height: 50px;
}

.skullicon {
    position: absolute;
    top: 5px;
    right: -5px;
    width: 25px;
    height: 25px;
    display: none;
}

.meeple:hover + .skullicon {
    display: block;
}
</style>
