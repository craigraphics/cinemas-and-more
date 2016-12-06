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
  images: {
    base_url: 'http://image.tmdb.org/t/p/',
    secure_base_url: 'https://image.tmdb.org/t/p/',
    backdrop_sizes: [
      'w300',
      'w780',
      'w1280'
    ],
    poster_sizes: [
      'w92',
      'w154',
      'w185',
      'w342',
      'w500',
      'w780'
    ],
    profile_sizes: [
      'w45',
      'w185',
      'h632'
    ]
  },
  cats: [
    {name: 'nowplaying', cat: 'now_playing', pageTitle: 'Now Playing'},
    {name: 'toprated', cat: 'top_rated', pageTitle: 'Top Rated'},
    {name: 'upcoming', cat: 'upcoming', pageTitle: 'Upcoming'}
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
