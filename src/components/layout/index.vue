<template>
  <div class="responsive">
    <comp-header />
    <main>
      <slot />
    </main>
    <comp-footer />
  </div>
</template>

<script setup lang="ts">
import CompHeader from './header.vue'
import CompFooter from './footer.vue'

defineOptions({
  name: 'ComponentLayout',
})
</script>

<style lang="scss" scoped></style>
