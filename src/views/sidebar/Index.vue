<template>
  <el-menu
    default-active="1"
    class="sidebar-menu h-full"
    :collapse="appStore.isSidebarCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <el-sub-menu index="image"> </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.sidebar-menu {
  position: relative;
}
</style>
