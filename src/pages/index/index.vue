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
  <!-- <uni-hello></uni-hello> -->
  <!-- <view class="bg" @click="navigateToPageA"></view> -->
  <!-- <uni-video></uni-video> -->
  <!-- <uni-clipboard></uni-clipboard> -->
  <uni-scancode></uni-scancode>
  <!-- <button @click="callPhone">拨打电话</button> -->
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
const navBarHeight = ref(0);
const navBarTop = ref(0);
const statusBarHeight = ref(0);

onLoad(() => {
  console.log("pages/index,页面栈", getCurrentPages());
  uni.getNetworkType({
    success: (res) => {
      console.log("网络类型", res);
    },
  });
  uni.onNetworkStatusChange((res) => {
    console.log("网络状态变化", res);
  });
  // #ifdef MP-WEIXIN

  statusBarHeight.value = uni.getSystemInfoSync().statusBarHeight;
  const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
  navBarHeight.value = menuButtonInfo.height;
  navBarTop.value = menuButtonInfo.top - statusBarHeight.value;
  // #endif
});
function callPhone() {
  uni.makePhoneCall({
    phoneNumber: "15828042763",
  });
}
const navigateToPageA = () => {
  uni.navigateTo({
    url: "/pagesA/index/index?age=1&name=张三",
  });
};
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
