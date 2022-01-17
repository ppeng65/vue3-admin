<template>
  <div class="app-main">
    <router-view />
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style scoped lang="scss">
.app-main {
  position: relative;
  box-sizing: border-box;
  padding: 61px 20px 20px 20px;
  min-height: calc(100vh - 50px);
  width: 100%;
  overflow: hidden;
}
</style>
