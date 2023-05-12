<template>
  <div class="home-container">
    <div class="title">测试</div>
    <div class="textarea-wrap">
      <el-input v-model="inputValue" :rows="5" type="textarea" placeholder="请输入您想咨询的问题" />
    </div>
    <div class="btn-wrap">
      <el-button type="primary" :disabled="!inputValue" :loading="loading" @click="onClick"
        >发送</el-button
      >
    </div>
    <div class="answer-wrap">
      <div class="font-normal">{{ loadingHint }}</div>
      <el-input v-model="answerText" :rows="5" type="textarea" :autosize="{ minRows: 5 }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { getAnswer } from "@/api";

const inputValue = ref("");
const answerText = ref("");
const loading = ref(false);

const showLoading = (flag: boolean) => {
  loading.value = flag;
};

const loadingHint = computed(() => {
  return loading.value ? "AI 思考中..." : "AI 的回复";
});

const changeAnswerText = (text: string) => {
  answerText.value = text;
};

const onClick = async () => {
  try {
    showLoading(true);
    changeAnswerText("");
    const res = await getAnswer({ query: inputValue.value });
    console.log(res);
    changeAnswerText(res.data.answer);
  } catch (error) {
    console.log(error);
  } finally {
    showLoading(false);
  }
};
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
