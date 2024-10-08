<template>
  <view> list </view>
  <view>{{ test }}</view>
  <view>
    <view @click="showGender">选择性别</view>
    <view>
      <text>
        {{ gender === 0 ? "男" : gender === 1 ? "女" : "请选择" }}
      </text>
    </view>
  </view>
</template>
<script setup>
import { onLoad } from "@dcloudio/uni-app";
import { ref } from "vue";
const test = ref("");
const gender = ref();
onLoad(() => {
  // uni.showToast({
  //   title: "123",
  //   icon: "none",
  //   mask: "true",
  // });
  // uni.showLoading({
  //   title: "123",
  //   icon: "none",
  //   mask: false,
  // });
  // uni.showModal({
  //   title: "123",
  //   content: "123",
  //   showCancel: true,
  //   success: (res) => {
  //     console.log("res", res);
  //   },
  // });
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
const showGender = () => {
  uni.showActionSheet({
    itemList: ["男", "女"],
    success: (res) => {
      gender.value = res.tapIndex;
    },
  });
};
</script>

<style scoped></style>
