<template>
  <div class="common-layout h-full">
    <el-container class="h-full">
      <el-aside width="auto">
        <slot name="sidebar"></slot>
      </el-aside>
      <el-container>
        <el-header>
          <slot name="header"></slot>
        </el-header>
        <el-main>
          <slot name="main"></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
