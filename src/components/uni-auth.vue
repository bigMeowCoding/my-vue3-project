<template>
  <button @click="doLogin">授权登录</button>
</template>
<script setup>
function doLogin() {
  uni.login({
    provider: "weixin",
    success: function (res) {
      let code = res.code;
      let appSecret = "13901683e535c2c2635f75c4fe8b6816";
      let appId = "wx64c8ec3279c4edec";
      uni
        .request({
          url: `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`,
        })
        .then((res) => {
          console.log(res);
          uni.getUserInfo({
            provider: "weixin",
            success: function (res) {
              console.log("getUserInfo res", res);
            },
          });
        });
    },
    fail: function (err) {
      console.log(err);
    },
  });
}
</script>

<style scoped></style>
