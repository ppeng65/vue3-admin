<template>
  <el-menu
    :collapse="!$store.getters.sidebarOpened"
    :default-active="activePath"
    :unique-opened="true"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
  >
    <SiderbarItem v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '../../../utils/route'
import SiderbarItem from './SiderbarItem'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})

const route = useRoute()
const activePath = computed(() => {
  const { path } = route
  return path
})
</script>

<style scoped lang="scss"></style>
