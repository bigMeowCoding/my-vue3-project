<template>
  <view
    :animation="animationData"
    style="background: red; height: 100rpx; width: 100rpx"
  ></view>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { onPullDownRefresh } from "@dcloudio/uni-app";

const animationData = ref({});
let animation = null;

// 使用 reactive 对象来保存动画配置
const animationConfig = reactive({
  duration: 1000,
  timingFunction: "ease",
});

onPullDownRefresh(() => {
  console.log("onPullDownRefresh");
  setTimeout(() => {
    uni.stopPullDownRefresh();
  });
});
onMounted(() => {
  animation = uni.createAnimation(animationConfig);
  performInitialAnimation();
  setTimeout(translateAnimation, 1000);
});

const performInitialAnimation = () => {
  animation.scale(2, 2).rotate(45).step();
  updateAnimationData();
};

const translateAnimation = () => {
  animation.translate(30).step();
  updateAnimationData();
};

const updateAnimationData = () => {
  animationData.value = animation.export();
};

const rotateAndScale = () => {
  animation.rotate(45).scale(2, 2).step();
  updateAnimationData();
};

const rotateThenScale = () => {
  animation.rotate(45).step();
  animation.scale(2, 2).step();
  updateAnimationData();
};

const rotateAndScaleThenTranslate = () => {
  animation.rotate(45).scale(2, 2).step();
  animation.translate(100, 100).step({ duration: 1000 });
  updateAnimationData();
};
</script>
<style scoped></style>
