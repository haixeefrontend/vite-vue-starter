<script setup lang="ts">
defineOptions({
  name: 'ComponentLayoutFooter',
})
</script>

<template>
  <footer class="sticky top-100vh py-8">
    <div class="text-center">
      <a class="text-sm" href="http://beian.miit.gov.cn" target="_blank">备案号</a>
      <span> | </span>
      <!-- TODO: replace the beian number and link -->
      <a class="text-sm" href="#" target="_blank"> 公安备案 </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
