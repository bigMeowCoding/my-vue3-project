<template>
  <button @click="copyText">复制文本</button>
  <button @click="pasteText">获取文本</button>
  <view>{{ text }}</view>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
const copyText = () => {
  uni.setClipboardData({ data: "Hello, UniApp!" });
};
const pasteText = () => {
  uni.getClipboardData({
    success: (res) => {
      text.value = res.data;
    },
  });
};
</script>

<style lang="scss" scoped></style>
