<script setup>
  import svg from '../assets/meeple-group.svg?raw'

  var meeplesvg = new window.DOMParser().parseFromString(svg, 'image/svg+xml')
  meeplesvg.documentElement.setAttribute('width', "25px")
  meeplesvg.documentElement.setAttribute('height', "25px")
</script>

<template>
  <div v-html="meeplesvg.documentElement.outerHTML"/>
</template>

<style scoped>
</style>
