<template>
  <header class="flex items-center gap-8 sticky top-0 left-0">
    <img src="#" />
    <h1>Title</h1>
    <nav class="flex-1">
      <ul class="flex-center gap-8 lg:gap-14">
        <template v-for="link in links" :key="link.path">
          <li class="w-10 py-4">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </li>
        </template>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'ComponentLayoutHeader',
})

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<style lang="scss" scoped></style>
