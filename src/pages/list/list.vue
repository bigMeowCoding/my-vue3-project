<template>
  <view> list </view>
  <view>{{ test }}</view>
</template>
<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
const test = ref("");
onLoad(() => {
  uni
    .request({
      url: "http://127.0.0.1:8888/test",
      method: "POST",
    })
    .then((res) => {
      console.log("res", res);
      test.value = res.data;
    });
  console.log("pages/list,页面栈", getCurrentPages());
});
</script>

<style scoped></style>
