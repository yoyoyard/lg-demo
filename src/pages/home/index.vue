<template>
  <el-main class="container">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="hover">
          <customVideoPlayer />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          从不显示
        </el-card>
      </el-col>
       <el-col :span="8">
        <el-card shadow="hover">
          总是显示
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          鼠标悬浮时显示
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          从不显示
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>
<script>
import customVideoPlayer from '@/components/customVideoPlayer'

export default {
  components: {
    customVideoPlayer,
  },

  data() {
    return {
      videoSources: [],
    }
  }
}
</script>