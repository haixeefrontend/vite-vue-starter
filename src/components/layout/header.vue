<template>
  <header class="sticky left-0 top-0 z-9999 gap-8 bg-white">
    <div class="flex items-center responsive">
      <img src="#" class="!transition- transition-(max-width) <md:hidden lg:max-w-60 md:max-w-45" />
      <icon-menu :class="['md:hidden size-8 transition', { 'opacity-0': showMenu }]" @click="showMenu = !showMenu" />
      <nav class="nav flex-1 <md:hidden" :data-active="showMenu">
        <ul>
          <template v-for="link in headers" :key="link.name">
            <li class="w-20 py-4 text-center">
              <router-link :to="{ name: link.name }">{{ link.meta.title }}</router-link>
            </li>
          </template>
        </ul>
      </nav>

      <el-drawer v-model="showMenu" direction="ltr" size="70%">
        <ul class="w-full flex flex-(center col)">
          <template v-for="link in headers" :key="link.name">
            <li class="w-20 py-4 text-center" @click="showMenu = !showMenu">
              <router-link :to="{ name: link.name }">{{ link.meta.title }}</router-link>
            </li>
          </template>
        </ul>
      </el-drawer>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu as IconMenu } from '@/assets/icons'
import { headers } from '@/routes'
import { ElDrawer } from 'element-plus'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

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
