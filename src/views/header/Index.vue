<template>
  <div>
<!--    <el-button :icon="isSidebarCollapse ? Expand : Fold" @click="toggleCollapse" />-->
<!--    <span>导航栏</span>-->
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
const { isSidebarCollapse } = storeToRefs(appStore);
const { toggleCollapse } = appStore;
</script>

<style lang="scss" scoped></style>
