<template>
  <AppContainer>
<!--    <template #sidebar>-->
<!--      <Sidebar />-->
<!--    </template>-->
    <template #header>
      <Header />
    </template>
    <template #main>
      <Main />
    </template>
  </AppContainer>
</template>

<script setup lang="ts">
import AppContainer from "@/components/layout/AppContainer.vue"
import Sidebar from "@/views/sidebar/Index.vue"
import Header from "@/views/header/Index.vue"
import Main from "@/views/main/Index.vue"
</script>

<style scoped></style>
