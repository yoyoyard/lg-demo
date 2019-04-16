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
      component: () => import("./pages/home/index.vue")
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import("./pages/home/detail.vue")
    },
  ]
})

export default router