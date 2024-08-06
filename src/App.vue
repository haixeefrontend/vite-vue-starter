<script setup lang="ts">
import CompLayout from '@/components/layout'
import { RouterView } from 'vue-router'

defineOptions({
  name: 'App',
})
</script>

<template>
  <comp-layout>
    <router-view />
  </comp-layout>
</template>

<style lang="scss" scoped></style>
