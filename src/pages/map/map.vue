<template>
  <view>
    <map
      id="map"
      class="map"
      style="width: 100%; height: 100vh"
      :markers="markers"
      :latitude="latitude"
      :longitude="longitude"
    ></map>
  </view>
</template>
<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
const latitude = ref(23.132194);
const longitude = ref(113.26653);
const markers = ref([
  { id: 1, width: 30, height: 30, latitude: 23.132194, longitude: 113.26653 },
]);
onLoad(() => {
  uni.getLocation({
    type: "gcj02",
    success: (res) => {
      console.log("getLocation res", res);
      latitude.value = res.latitude;
      longitude.value = res.longitude;
      markers.value[0].latitude = res.latitude;
      markers.value[0].longitude = res.longitude;
    },
    fail: (error) => {
      console.error("getLocation error", error);
    },
  });
});
</script>

<style scoped>
.map {
  width: 100%;
  height: 100vh;
}
</style>
