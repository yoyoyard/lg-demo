<template>
  <div class="swipe">
    <div class="swipe-list" @mouseover="stop" @mouseleave="run">
      <ul ref="swipe">
        <li>
          <img src="../assets/images/nv.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nv.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nv.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nv.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
        <li>
          <img src="../assets/images/nan.png" height="116" width="116" alt>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timer: "",
      speed: 1
    };
  },
  computed: {},
  watch: {},
  methods: {
    move() {
      if (this.$refs.swipe.offsetLeft <= -this.$refs.swipe.offsetWidth) {
        this.$refs.swipe.style.left = 0;
      } else if (this.$refs.swipe.offsetLeft > 0) {
        this.$refs.swipe.style.left = -this.$refs.swipe.offsetWidth / 2 + "px";
      }
      this.$refs.swipe.style.left =
        this.$refs.swipe.offsetLeft - this.speed + "px";
    },
    stop() {
      clearInterval(this.timer);
    },
    run() {
      this.timer = setInterval(this.move, 10);
    }
  },
  created() {},
  mounted() {
    this.timer = setInterval(this.move, 10);
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.swipe {
  width: 1160px;
  height: 116px;
  margin: 0 auto;
  text-align: left;
  overflow: hidden;
  .swipe-list {
    position: relative;
    width: 100%;
    height: 100%;
    ul {
      position: absolute;
      left: 0;
      margin: 0;
      padding: 0;
      display: flex;
      width: 100%;
      li {
        margin: 0;
        padding: 0;
        list-style: none;
        img {
          display: block;
        }
      }
    }
  }
}
</style>