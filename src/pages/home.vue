<template>
  <div>Home</div>
</template>

<script setup lang="ts">
import { useApi } from '@/api'

defineOptions({
  name: 'PageHome',
})

const api = useApi()
</script>

<style lang="scss" scoped></style>
