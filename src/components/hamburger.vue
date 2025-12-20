<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import SideBar from "./SideBar.vue";

const toggle = ref(false);

const toggleSideBar = () => {
  toggle.value = !toggle.value;
};
</script>

<template>
  <div>
    <!-- Hamburger 按鈕 -->
    <button @click="toggleSideBar">
      <Icon
        v-if="!toggle"
        icon="uil:align-left-justify"
        style="color: #aead5f"
        class="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity"
      />
    </button>

    <!-- 遮罩層 -->
    <div
      v-if="toggle"
      @click="toggleSideBar"
      class="fixed inset-0 bg-black/60 z-40 lg:hidden"
    ></div>

    <!-- 側邊欄 -->
    <div
      :class="[
        'fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 lg:hidden',
        toggle ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <div class="h-full py-4 pl-4">
        <SideBar />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
