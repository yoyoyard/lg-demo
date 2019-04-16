<template>
  <div class="detail">
    <div class="video-list">
      <video
        src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        autoplay="autoplay"
        width="366px"
        height="266px"
        style="object-fit:fill;"
      ></video>
      <video
        src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        autoplay="autoplay"
        width="366px"
        height="266px"
        style="object-fit:fill;"
      ></video>
      <video
        src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        autoplay="autoplay"
        width="366px"
        height="266px"
        style="object-fit:fill;"
      ></video>
      <video
        src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        autoplay="autoplay"
        width="366px"
        height="266px"
        style="object-fit:fill;"
      ></video>
    </div>
    <div class="controls">
      <i class="el-icon-caret-left size" style="left:21%;top:240px;" @click="turnLeft"></i>
      <i
        class="el-icon-caret-left size"
        style="left:35%;top:190px;transform:rotate(90deg);"
        @click="turnUp"
      ></i>
      <i
        class="el-icon-caret-left size"
        style="left:49%;top:240px;transform:rotate(180deg);"
        @click="turnRight"
      ></i>
      <i
        class="el-icon-caret-left size"
        style="left:35%;top:290px;transform:rotate(270deg);"
        @click="turnDown"
      ></i>
    </div>
    <swipeList/>
  </div>
</template>
<script>
import swipeList from "@/components/swipe";
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    turnLeft() {
      console.log("向左");
    },
    turnUp() {
      console.log("向上");
    },
    turnRight() {
      console.log("向右");
    },
    turnDown() {
      console.log("向下");
    }
  },
  created() {},
  mounted() {},
  components: {
    swipeList
  }
};
</script>
<style lang="scss" scoped>
.detail {
  width: 1160px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  // width:420px;
  // height:420px;
  .video-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 846px;
    video {
      margin-bottom: 35px;
    }
  }
  .controls {
    position: relative;
    width: 314px;
    .size {
      position: absolute;
      font-size: 80px;
    }
  }
}
</style>