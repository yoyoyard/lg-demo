<template>
  <div class="video-des">
	<div class="player-info">
     <video  ref="playerInfo" preload="auto" width="100%" height="100%" :src="$store.state.currentVideo" style="object-fit:fill;">
     </video>
     <div  ref="fill" class="fill" :class="{'bg':flag}" @mouseenter="enter" @mousemove="move($event)" @mouseleave="leave"  @click="player"></div>
    </div>
    <div class="controls">
    	<i class="el-icon-caret-left size" style="left:121%;top:310px;" @click="turnLeft"></i>
    	<i class="el-icon-caret-left size" style="left:128%;top:270px;transform:rotate(90deg);" @click="turnUp"></i>
    	<i class="el-icon-caret-left size" style="left:135%;top:310px;transform:rotate(180deg);" @click="turnRight"></i>
    	<i class="el-icon-caret-left size" style="left:128%;top:350px;transform:rotate(270deg);" @click="turnDown"></i>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    	flag:false,
    	played:false,
    	timer:''
    }
  },
  computed: {
  },
  methods: {
	  move(e) {
	    if(!this.$refs.playerInfo.paused) {
	      clearTimeout(this.timer)
	      this.$refs.fill.style.cursor="default"
	      this.timer=setTimeout(()=>{
	        this.$refs.fill.style.cursor="none"
	      },2000)
	    }
	    console.log('x:'+e.x)
	    console.log('y:'+e.y)
	  },
	  player() {
	    if(this.$refs.playerInfo.paused){
	      this.played=true
	      this.flag=false
	      this.$refs.playerInfo.play()
	    }else {
	      clearTimeout(this.timer)
	      this.$refs.fill.style.cursor="default"
	      this.played=false
	      this.flag=false
	      this.$refs.playerInfo.pause()
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
	  },
	  turnLeft(){
	  	console.log('向左')
	  },
	  turnUp(){
	  	console.log('向上')
	  },
	  turnRight(){
	  	console.log('向右')
	  },
	  turnDown(){
	  	console.log('向下')
	  }
  },
  created () {
  },
  mounted () {
  },
  components: {
  },
  watch:{
	'played':function(val){
	   if(val){
	     this.timer=setTimeout(()=>{
	       this.$refs.fill.style.cursor="none"
	     },2000)
	   }
	},
	'$store.state.currentVideo':function(){
		this.$refs.playerInfo.currentTime=0
	}
  },
}
</script>
<style lang="scss" scoped>
.video-des {
	position:absolute;
	left:20px;
	top:300px;
	.player-info {
	  margin-right:15px;
	  position: relative;
	  width:666px;
	  height:666px;
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
	.controls {
		.size {
			position:absolute;
			font-size:80px;
		}
	}
}

</style>