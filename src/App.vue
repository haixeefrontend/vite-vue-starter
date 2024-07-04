<script setup lang="ts">
import { RouterView } from 'vue-router'

import CompLayout from '@/components/layout'

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
