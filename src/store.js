import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  page: 1,
  appTitle: 'Cinemas & More',
  appVersion: '0.0.1',
  commonService: {
    apiKey: 'c721512e7f5e55a1136022cdfd1e1314',
    lang: 'en-US',
    api: 'https://api.themoviedb.org/3{/type}{/category}{/list}',
    get params () { params: { api_key: this.apiKey } },
    headers: { 'Accept-Language': 'en-US' }
  },
  posterPath: {
    url: 'https://image.tmdb.org/t/p/',
    squared: 'w132_and_h132_bestv2/',
    smallWide: 'w320_and_h180_bestv2/',
    mediumVertical: 'w185_and_h278_bestv2/',
    bigVertical: 'w300_and_h450_bestv2/'
  },
  cats: [
    {name: 'nowplaying', cat: 'now_playing', pageTitle: 'Now Playing'},
    {name: 'toprated', cat: 'top_rated', pageTitle: 'Top Rated'}
  ]
}

const mutations = {
  INCREMENT(state) { state.count++ }
}

const actions = {
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
