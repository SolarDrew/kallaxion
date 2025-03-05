<script setup>
import MeepleIcon from './MeepleIcon.vue'
import HourglassIcon from './HourglassIcon.vue'
import SkullIcon from './SkullIcon.vue'
const users = defineModel('users')
const gameInfo = defineModel('games')
const props = defineProps({
    colours: Array,
})

function removePlayer(playerObj) {
    for (var game of playerObj.games) {
        if (game.owners.includes(playerObj.name)) {
            if (game.owners.length == 1) {
                var index = gameInfo.value.indexOf(game)
                if (index > -1) {
                    gameInfo.value.splice(index, 1)
                }
            }
            else {
                game.owners.splice(game.owners.indexOf(playerObj.name), 1)
            }
        }
    }
    index = users.value.indexOf(playerObj);
    if (index > -1) {
        users.value.splice(index, 1);
    }
}
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
