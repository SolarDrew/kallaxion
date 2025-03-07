<script setup>
import svg from '../assets/info.svg?raw'

var infosvg = new window.DOMParser().parseFromString(svg, 'image/svg+xml')
infosvg.getElementsByTagName('path')[0].setAttribute('fill', 'black')
</script>

<template>
  <div v-html="infosvg.documentElement.outerHTML"/>
</template>

<style scoped>
</style>
