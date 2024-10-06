<template>pagesA</template>
<script setup>
import { onLoad } from "@dcloudio/uni-app";

onLoad(() => {
  console.log("pagesA/index,页面栈", getCurrentPages());
});
</script>
