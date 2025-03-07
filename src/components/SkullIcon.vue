<script setup>
import svg from '../assets/death-skull.svg?raw'

var skullsvg = new window.DOMParser().parseFromString(svg, 'image/svg+xml')
</script>

<template>
  <div v-html="skullsvg.documentElement.outerHTML"/>
</template>

<style scoped>
</style>
