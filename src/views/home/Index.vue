<template>
  <div class="home-container">
    <div class="title">测试</div>
    <div class="textarea-wrap">
      <el-input v-model="inputValue" :rows="3" type="textarea" placeholder="请输入您想咨询的问题" />
    </div>
    <div class="btn-wrap">
      <el-button type="primary">发送</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const inputValue = ref("");
</script>

<style lang="scss" scoped>
.home-container {
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  .btn-wrap {
    text-align: right;
    margin-top: 20px;
  }
}
</style>
