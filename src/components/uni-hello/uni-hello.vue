<template>
  <view>
    {{ voiceFilePath }}
  </view>
  <button @click="startRecord">开始录音</button>
  <button @click="stopRecord">结束录音</button>
  <button @click="playRecord">播放录音</button>
</template>

<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";

const recordManager = ref(null);
const innerAudioContext = uni.createInnerAudioContext();
const voiceFilePath = ref("");
// innerAudioContext.src =
//   "https://lc-sycdn.kuwo.cn/8190d0434c74c89c91cf570316b670ae/6714c74e/resource/n2/6/67/2382874145.mp3?bitrate$128&from=vip";
innerAudioContext.onPlay(() => {
  console.log("开始播放");
});
recordManager.value = uni.getRecorderManager();
// innerAudioContext.autoplay = true;
recordManager.value.onStop((res) => {
  console.log("res", res);
  voiceFilePath.value = res.tempFilePath;
});
onLoad(() => {
  // innerAudioContext.play();
});

const startRecord = () => {
  recordManager.value.start();
};
const stopRecord = () => {
  recordManager.value.stop();
};
const playRecord = () => {
  console.log("voiceFilePath", voiceFilePath.value);

  if (voiceFilePath.value) {
    innerAudioContext.src = voiceFilePath.value;
    innerAudioContext.play();
  }
};
</script>

<style scoped></style>
