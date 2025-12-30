<script setup lang="ts">
import CompFooter from './footer.vue'
import CompHeader from './header.vue'

defineOptions({
  name: 'ComponentLayout',
})
</script>

<template>
  <div class="responsive">
    <comp-header />
    <main>
      <slot />
    </main>
    <comp-footer />
  </div>
</template>

<style lang="scss" scoped></style>
