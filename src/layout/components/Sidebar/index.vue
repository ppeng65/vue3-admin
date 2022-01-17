<template>
  <div class="">
    <div v-for='item in routes' :key='item.path' class='menu'>{{ item.meta.title }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '../../../utils/route'

const router = useRouter()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
const route = useRoute()
console.log(route)
</script>

<style scoped lang="scss"></style>
