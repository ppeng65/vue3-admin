<template>
  <div>
    profile
    {{ $t('msg.test') }}
    <el-pagination
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
