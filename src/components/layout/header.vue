<template>
  <header class="gap-8 sticky top-0 left-0 bg-white z-9999">
    <div class="responsive flex items-center">
      <img src="#" class="transition-(! max-width) <md:hidden md:max-w-45 lg:max-w-60" />
      <icon-menu :class="['md:hidden size-8 transition', { 'opacity-0': showMenu }]" @click="showMenu = !showMenu" />
      <icon-close :class="['md:hidden size-8 transition', { 'opacity-0': !showMenu }]" @click="showMenu = !showMenu" />
      <nav class="<md:relative flex-1 nav" :data-active="showMenu">
        <ul>
          <template v-for="link in headers" :key="link.name">
            <li class="w-20 py-4 text-center">
              <router-link :to="{ name: link.name }">{{ link.meta.title }}</router-link>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { headers } from '@/routes'
import { Close as IconClose, Menu as IconMenu } from '@/assets/icons'

defineOptions({
  name: 'ComponentLayoutHeader',
})
const showMenu = ref(false)
</script>

<style lang="scss" scoped>
.nav {
  --at-apply: '<md:(absolute top-10 left-0 w-full bg-white transition-(~ duration-400))';
  &[data-active='false'] {
    --at-apply: '<md:(translate-y--200% opacity-0)';
  }
  ul {
    --at-apply: 'lg:gap-14 flex-center <md:flex-col';
  }
}
</style>
