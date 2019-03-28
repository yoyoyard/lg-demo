<template>
 <video-player class="vjs-custom-skin"
                 ref="videoPlayer"
                 :responsive="true"
                 @loadeddata="onPlayerLoadeddata($event)"
                 :options="playerOptions"
                >
  </video-player>
</template>

<style lang="scss" scoped>
.video {
  width: 33vw;
  height: auto;
}
</style>

<script>
 export default {
    data() {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'zh',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "/static/images/author.jpg",
        }
      }
    },
    methods: {
      onPlayerLoadeddata(player) {
        const _this = this;
        player.on('loadedmetadata',function(){
          //加载到元数据后开始播放视频
          this.width=640;
          this.height=360;
          _this.showLoading = false;
        })
      },
    },
 }
</script>
