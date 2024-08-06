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
import CompFooter from './footer.vue'
import CompHeader from './header.vue'

defineOptions({
  name: 'ComponentLayout',
})
</script>

<style lang="scss" scoped></style>
