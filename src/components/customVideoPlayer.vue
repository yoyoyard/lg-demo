<template>
  <div class="player">
   <video  ref="player" src="https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" width="100%" >
   </video>
   <div  ref="fill" class="fill" :class="{'bg':flag}" @mouseenter="enter" @mousemove="move($event)" @mouseleave="leave"  @click="player"></div>
  </div>
 <!-- <video-player class="vjs-custom-skin"
                 ref="videoPlayer"
                 :responsive="true"
                 :playsinline="true"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @mouseover="over($event)"
                 :options="playerOptions"
                >
  </video-player> -->
</template>

<style lang="scss" scoped>
.player {
  position: relative;
  .fill {
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(255,255,255,0);
  }
  .bg {
    background-color:rgba(0,0,0,.3);
  }
}
</style>

<script>
 export default {
    data() {
      return {
        played:false,
        flag:false
        // playerOptions: {
        //   // videojs options
        //   muted: true,
        //   language: 'zh',
        //   playbackRates: [0.7, 1.0, 1.5, 2.0],
        //   sources: [{
        //     type: "video/mp4",
        //     src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        //   }],
        //   poster: "../assets/logo.png",
        // }
      }
    },
    methods: {
      // onPlayerLoadeddata(player) {
      //   const _this = this;
      //   player.on('loadedmetadata',function(){
      //     //加载到元数据后开始播放视频
      //     this.width=640;
      //     this.height=360;
      //     _this.showLoading = false;
      //   })
      // },
      move(e) {
        console.log('x:'+e.x)
        console.log('y:'+e.y)
      },
      player() {
        if(this.$refs.player.paused){
          this.played=true
          this.flag=false
          this.$refs.player.play()
        }else {
          this.played=false
          this.flag=false
          this.$refs.player.pause()
        }
      },
      enter() {
        if(this.played) {
          this.flag=false
        }else {
          this.flag=true
        }
        // console.log('enter')
      },
      leave() {
        this.flag=false
        // console.log('leave')
      }
    },
    mounted() {
    }
 }
</script>
