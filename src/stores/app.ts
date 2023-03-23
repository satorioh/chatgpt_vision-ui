import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const sidebarCollapse = ref(false);

  const isSidebarCollapse = computed(() => sidebarCollapse.value);

  function toggleCollapse() {
    sidebarCollapse.value = !sidebarCollapse.value;
  }

  return { sidebarCollapse, toggleCollapse, isSidebarCollapse };
});
