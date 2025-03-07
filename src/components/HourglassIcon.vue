<script setup>
import svg from '../assets/hourglass.svg?raw'

var hgsvg = new window.DOMParser().parseFromString(svg, 'image/svg+xml')
hgsvg.getElementsByTagName('path')[0].setAttribute('fill', 'darkgrey')
</script>

<template>
  <div v-html="hgsvg.documentElement.outerHTML"/>
</template>

<style scoped>
</style>
