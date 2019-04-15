<template>
  <el-main class="container">
    <el-row type="flex" :gutter="8">
      <el-col :span="15">
        <div class="wrapper" ref="wrapper">
          <div class="content" :style="{width:vsize+'px'}">
            <customVideoPlayer v-for="(item,i) in videoSources" :msg="item"/>
          </div>
        </div>
      </el-col>
      <el-col :span="4">
        <el-button type="text" style="padding:0;" @click="open">
          <i class="el-icon-plus plus" style="cursor:pointer;font-size:200px;color:#356859;"></i>
        </el-button>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">鼠标悬浮时显示</el-card>
        <el-card shadow="hover">从不显示</el-card>
        <el-card shadow="hover">鼠标悬浮时显示</el-card>
        <el-card shadow="hover">从不显示</el-card>
        <el-card shadow="hover">鼠标悬浮时显示</el-card>
        <el-card shadow="hover">从不显示</el-card>
        <el-card shadow="hover">鼠标悬浮时显示</el-card>
        <el-card shadow="hover">从不显示</el-card>
        <el-card shadow="hover">鼠标悬浮时显示</el-card>
        <el-card shadow="hover">从不显示</el-card>
        <el-card shadow="hover">鼠标悬浮时显示</el-card>
        <el-card shadow="hover">从不显示</el-card>
        <el-card shadow="hover">鼠标悬浮时显示</el-card>
        <el-card shadow="hover">从不显示</el-card>
        <el-card shadow="hover">鼠标悬浮时显示</el-card>
        <el-card shadow="hover">从不显示</el-card>
      </el-col>
    </el-row>
    <videoDes/>
  </el-main>
</template>
<script>
import customVideoPlayer from "@/components/customVideoPlayer";
import videoDes from "@/components/videoDes";
import Bscroll from "better-scroll";
export default {
  components: {
    customVideoPlayer,
    videoDes
  },

  data() {
    return {
      videoSources: [
        "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
      ],
      value: "",
      vsize: "",
      simple: 230
    };
  },
  methods: {
    open() {
      this.$prompt("请输入视频地址", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          this.value = value;
          this.videoSources.push(this.value);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  },
  mounted() {
    this.$nextTick(() => {
      let scroll = new Bscroll(this.$refs.wrapper, {
        scrollX: true,
        click: true
      });
    });
  },
  watch: {
    videoSources: function(val) {
      this.vsize = this.simple * val.length;
      this.$store.commit("addVideo", this.value);
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  .wrapper {
    width: 880px;
    overflow: hidden;
    .content {
      display: flex;
      width: 900px;
    }
  }
  .plus {
    display: block;
    padding: 5px;
    border: 1px dashed #356859;
    border-radius: 10px;
  }
}
</style>