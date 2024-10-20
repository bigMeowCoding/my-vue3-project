<template>
  <view>
    <view class="page-body">
      <view class="page-section">
        <video
          id="myVideo"
          src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/wap2appvsnative.mp4"
          @error="videoErrorCallback"
          @timeupdate="getTime"
          :danmu-list="danmuList"
          enable-danmu
          danmu-btn
          controls
        ></video>
        <view
          >{{ formSecondes(currentTime) }}/{{ formSecondes(duration) }}</view
        >
        <button @click="playVideo">播放</button>
        <button @click="pauseVideo">暂停</button>
        <button @click="forwardVideo">前进15秒</button>
        <button @click="backVideo">后退15秒</button>
        <view class="uni-list">
          <view class="uni-list-cell">
            <view>
              <view class="uni-label">弹幕内容</view>
            </view>
            <view class="uni-list-cell-db">
              <input
                @blur="bindInputBlur"
                class="uni-input"
                type="text"
                placeholder="在此处输入弹幕内容"
              />
            </view>
          </view>
        </view>
        <view class="btn-area">
          <button
            @tap="bindSendDanmu"
            class="page-body-button"
            formType="submit"
          >
            发送弹幕
          </button>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { onReady } from "@dcloudio/uni-app";
// import { getCurrentInstance } from "@vue/runtime-core";
import { ref, getCurrentInstance } from "vue";

const title = ref("video");
const src = ref("");
const inputValue = ref("");
const currentTime = ref("00:00");
const duration = ref("00:00");
const danmuList = ref([
  {
    text: "第 1s 出现的弹幕",
    color: "#ff0000",
    time: 1,
  },
  {
    text: "第 3s 出现的弹幕",
    color: "#ff00ff",
    time: 3,
  },
]);

let videoContext = ref(null);

onReady(() => {
  const instance = getCurrentInstance();
  console.log("instance", instance);

  videoContext.value = uni.createVideoContext("myVideo", instance);
});

function playVideo() {
  console.log("playVideo");
  videoContext.value.play();
}
function pauseVideo() {
  console.log("pauseVideo");
  videoContext.value.pause();
}
function forwardVideo() {
  videoContext.value.seek(currentTime.value + 15);
}
function backVideo() {
  videoContext.value.seek(currentTime.value - 15);
}
const bindInputBlur = (e) => {
  inputValue.value = e.target.value;
};
const getTime = (e) => {
  currentTime.value = e.target.currentTime;
  duration.value = e.target.duration;
};

const bindButtonTap = () => {
  uni.chooseVideo({
    sourceType: ["album", "camera"],
    maxDuration: 60,
    camera: ["front", "back"],
    success: (res) => {
      src.value = res.tempFilePath;
    },
  });
};

const bindSendDanmu = () => {
  videoContext.value.sendDanmu({
    text: inputValue.value,
    color: getRandomColor(),
  });
};

const videoErrorCallback = (e) => {
  console.log("视频错误信息:");
  console.log(e.target.errMsg);
};
const formSecondes = (value) => {
  let minutes = parseInt(value / 60) ? parseInt(value / 60) : 0; // 分钟
  let remainingSeconds = parseInt(value % 60) ? parseInt(value % 60) : 0; // 秒
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (remainingSeconds < 10) {
    remainingSeconds = `0${remainingSeconds}`;
  }
  return `${minutes}:${remainingSeconds}`;
};

const getRandomColor = () => {
  const rgb = [];
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16);
    color = color.length == 1 ? "0" + color : color;
    rgb.push(color);
  }
  return "#" + rgb.join("");
};
</script>
