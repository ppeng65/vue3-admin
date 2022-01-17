<template>
  <div class="">
    <div class="logo-container">
      <el-avatar size="44" shape="square" :src="LogoSrc"></el-avatar>
      <h1 v-if="$store.getters.sidebarOpened" class="logo-title">vue-admin</h1>
    </div>
    <el-scrollbar>
      <SiderbarMenu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import {} from 'vue'
import SiderbarMenu from './SiderbarMenu.vue'
import LogoSrc from '../../../assets/logo.png'
</script>

<style scoped lang="scss">
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
