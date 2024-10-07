<template>
  <text> my </text>
  <view>
    图片预览：

    <image :key="index" v-for="(item, index) in imgSrcs" :src="item" />
  </view>
  <button @click="upload" type="default">上传</button>
</template>
<script setup>
import { ref } from "vue";

const imgSrcs = ref([]);

const upload = function () {
  uni.chooseImage({
    success: (res) => {
      console.log("chooseImage res", res);
      for (let i = 0; i < res.tempFilePaths.length; i++) {
        uni.uploadFile({
          url: "http://127.0.0.1:8888/upload",
          filePath: res.tempFilePaths[i], // 必须要有
          name: "file",
          formData: {
            file: res.tempFiles[i], // 服务端识别req.file
          },
          success: (uploadRes) => {
            console.log("上传成功", uploadRes);
            imgSrcs.value[i] = JSON.parse(uploadRes.data).url;
          },
          fail: (error) => {
            console.error("上传失败", error);
          },
        });
      }
    },
  });
};
</script>

<style scoped></style>
