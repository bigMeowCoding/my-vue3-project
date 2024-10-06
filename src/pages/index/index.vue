<template>
  <view class="content">
  图片预览：<image :src="showImage" class="logo" />

    <button type="default" @click="uploadImage">
      上传图片
    </button>
    <button type="default" @click="abortUpload">
      终止上传
    </button>
  </view>
</template>

<script setup>
function uploadImage() {
  uni.chooseImage({
    count: 1,
    success: function (res) {
      uni.uploadFile({
        url: 'http://localhost:3000/upload',
        filePath: res.tempFilePaths[0],
        name: 'file',
        success: function (res) {
          console.log(res)
        }
      })
    }
  })
}
function abortUpload() {
  uni.request({
    url: 'https://httpbin.org/delay/3',
    success: function (res) {
      console.log(res)
    }
  })
}
function handleClick() {
  uni.navigateTo({
    url: '/pages/list/list'
  })
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
