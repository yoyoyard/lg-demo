import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./pages/home/home.vue"),
      hidden:true
    },
    {
      path: "/index",
      name: "index",
      component: () => import("./pages/home/index.vue"),
      meta:{
        title:'视频列表'
      }
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("./pages/home/detail.vue"),
      meta:{
        title:'视频详情'
      }
    },
    {
      path: "/analysis",
      name: "analysis",
      component: () => import("./pages/home/analysis.vue"),
      meta:{
        title:'视频分析'
      }
    },
  ]
})

export default router