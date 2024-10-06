<template>
  pagesA

  <view class="bg"> </view>
</template>
<script setup>
import { onLoad } from "@dcloudio/uni-app";

onLoad(() => {
  console.log("pagesA/index,页面栈", getCurrentPages());
});
</script>

<style scoped>
.bg {
  height: 100vh;
  width: 100vw;
  background: url("@/static/logo.png") no-repeat;
  background-size: contain;
}
</style>
