<template>
  <el-menu
    default-active="1"
    class="sidebar-menu h-full"
    :collapse="appStore.isSidebarCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="0">LOGO</el-menu-item>
    <el-sub-menu index="image">
      <template #title
        ><el-icon><Picture /></el-icon><span>图片处理</span></template
      >
      <el-menu-item index="ocr">OCR识别</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { Picture } from "@element-plus/icons-vue";

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
