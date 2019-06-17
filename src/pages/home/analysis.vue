<template>
  <el-row>
    <el-col :span="18">
      <video
        ref="playerInfo"
        preload="auto"
        width="100%"
        height="520"
        style="object-fit:fill;"
        @click="changeStatus"
      ></video>
    </el-col>
    <el-col :span="6">
      <div class="list">
        <ul>
          <li
            v-for="(cell,i) in device"
            :key="cell.name"
            :class="i===index?'actived':''"
            @click="changeVideo(i)"
          >{{cell.name}}</li>
        </ul>
      </div>
    </el-col>
    <el-col :span="18">
      <el-table
        :data="tableData"
        height="180"
        border
        style="width: 100%;"
        :row-style="{'background-color':'#f3f3f3'}"
      >
        <el-table-column prop="date" label="日期时间" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="start" label="开始时间" width="180"></el-table-column>
        <el-table-column prop="end" label="结束时间" width="180"></el-table-column>
      </el-table>
    </el-col>
    <el-col :span="6">
      <canvas ref="canvas"/>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      timer: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          start: "10:00:00",
          end: "12:00:00"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          start: "10:00:00",
          end: "12:00:00"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          start: "10:00:00",
          end: "12:00:00"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          start: "10:00:00",
          end: "12:00:00"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          start: "10:00:00",
          end: "12:00:00"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          start: "10:00:00",
          end: "12:00:00"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          start: "10:00:00",
          end: "12:00:00"
        }
      ],
      device: [
        {
          name: "摄像头1",
          url:
            "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
        },
        {
          name: "摄像头2",
          url:
            "https://s3.bytecdn.cn/aweme/resource/web/static/image/index/tvc-v2_30097df.mp4"
        }
      ]
    };
  },
  methods: {
    changeStatus() {
      if (this.$refs.playerInfo.paused) {
        return this.$refs.playerInfo.play();
      }
      this.$refs.playerInfo.pause();
    },
    changeVideo(index) {
      if (index !== this.index) {
        this.$refs.playerInfo.src = this.device[index].url;
        this.$refs.playerInfo.currentTime = 0;
        this.index = index;
        setTimeout(() => {
          this.getData();
        }, 100);
      }
    },
    creatImg() {
      const video = this.$refs.playerInfo;
      const mycanvas = this.$refs.canvas;
      mycanvas
        .getContext("2d")
        .drawImage(video, 100, 100, 762, 344, 0, 0, 381, 172);
    },
    getData() {
      this.creatImg();
      this.tableData.unshift({
        date: this.$root.$options.filters.timeHandle(Date.now()),
        name: "嘿嘿",
        address: "武汉市洪山区",
        start: "10:00:00",
        end: "12:00:00"
      });
      this.tableData.pop();
    }
  },
  mounted() {
    this.$refs.playerInfo.src = this.device[0].url;
    setTimeout(() => {
      this.getData();
    }, 100);
    this.timer = setInterval(() => {
      this.getData();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  }
};
</script>
<style lang="scss" scoped>
.list {
  height: 518px;
  border: 1px solid #ccc;
  background: -webkit-linear-gradient(
    180deg,
    rgb(61, 43, 102),
    rgb(62, 62, 231)
  );
  background: -o-linear-gradient(180deg, rgb(61, 43, 102), rgb(62, 62, 231));
  background: -moz-linear-gradient(180deg, rgb(61, 43, 102), rgb(62, 62, 231));
  background: -mos-linear-gradient(180deg, rgb(61, 43, 102), rgb(62, 62, 231));
  background: linear-gradient(180deg, rgb(61, 43, 102), rgb(62, 62, 231));
  ul {
    height: 100%;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    li {
      list-style: none;
      color: white;
      padding: 5px 0 5px 40%;
      text-align: left;
      cursor: pointer;
    }
    .actived {
      background-color: rgb(84, 106, 204);
    }
  }
}
canvas {
  display: block;
  width: 100%;
}
</style>

