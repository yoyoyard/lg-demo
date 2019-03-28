import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";

import VueVideoPlayer from 'vue-video-player'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueVideoPlayer)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
