<template>
  <div>
    <div class="player">
     <video  ref="player" preload="auto" width="100%" height="100%" style="object-fit:fill;" @contextmenu.prevent="getInfo(msg)" @click="show(msg)">
      <source :src="msg"></source>
     </video>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.player {
  margin-right:10px;
  position: relative;
  width:210px;
  height:210px;
}
</style>

<script>
 export default {
    data() {
      return {
        show(msg) {
          this.$store.commit('changeVideo',msg)
        }
      }
    },
    props:['msg'],
    methods: {
      getInfo(msg){
        this.$alert('<p>这个视频叫xxx</p><br/><p>这个视频是xxx</p>', '视频信息', {
          dangerouslyUseHTMLString: true
        });
      },
      
    }
 }
</script>
