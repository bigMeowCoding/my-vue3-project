<template>
  <button @click="scanCode">从相机和相册扫码</button>
  <button @click="scanQRCode">从相机扫码</button>
  <button @click="scanBarCode">条形码</button>
  <view>条码类型:{{ barcodeType }}</view>
  <view>条码内容:{{ barcodeData }}</view>
</template>

<script setup>
import { ref } from "vue";
const barcodeType = ref("");
const barcodeData = ref("");
function scanCode() {
  uni.scanCode({
    success: (res) => {
      barcodeType.value = res.scanType;
      barcodeData.value = res.result;
    },
  });
}
function scanQRCode() {
  uni.scanCode({
    onlyFromCamera: true,
    success: (res) => {
      barcodeType.value = res.scanType;
      barcodeData.value = res.result;
    },
  });
}
function scanBarCode() {
  uni.scanCode({
    scanType: ["barCode"],
    success: (res) => {
      barcodeType.value = res.scanType;
      barcodeData.value = res.result;
    },
  });
}
</script>

<style lang="scss" scoped></style>
