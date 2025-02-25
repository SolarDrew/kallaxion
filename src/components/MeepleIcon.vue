<script setup>
  import svg from '../assets/meeple.svg?raw'

  const props = defineProps({
    fill: String,
  })

  var meeplesvg = new window.DOMParser().parseFromString(svg, 'image/svg+xml')
  meeplesvg.getElementsByTagName('path')[0].setAttribute('fill', props.fill)
  meeplesvg.documentElement.setAttribute('width', "50px")
  meeplesvg.documentElement.setAttribute('height', "50px")

</script>

<template>
  <div v-html="meeplesvg.documentElement.outerHTML"/>
</template>

<style scoped>
</style>
