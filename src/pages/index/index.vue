<template>
  <view class="status_bar" :style="{ height: statusBarHeight + 'px' }"> </view>
  <view
    class="nav_bar"
    :style="{
      paddingTop: navBarTop + 'px',
      height: navBarHeight + 'px',
    }"
  >
    首页
  </view>
  <uni-hello></uni-hello>
  <view class="bg"></view>
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
const navBarHeight = ref(0);
const navBarTop = ref(0);
const statusBarHeight = ref(0);

onLoad(() => {
  statusBarHeight.value = uni.getSystemInfoSync().statusBarHeight;
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
  console.log("onLoad", menuButtonInfo, statusBarHeight);
  navBarHeight.value = menuButtonInfo.height;
  navBarTop.value = menuButtonInfo.top - statusBarHeight.value;
});
</script>

<style scoped>
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav_bar {
  height: 80rpx;
  width: 100%;
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg {
  height: 100vh;
  width: 100vw;
  background-color: red;
  background: url("https://pic.rmb.bdstatic.com/bjh/down/65f41fc4292ba86eec41e268c5487e99.jpeg")
    no-repeat;
  background-size: contain;
}
</style>
