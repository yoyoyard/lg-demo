import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
	currentVideo:'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
    videoSources:['https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm']
}

const mutations = {
    changeVideo(state,n) {
        state.currentVideo=n
    },
    addVideo(state,n) {
        state.videoSources.push(n)
    }
}

const getters = {
	
}
export default new Vuex.Store({
  state,
  mutations,
  getters 
})
