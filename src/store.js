import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  appTitle: 'Movies & More',
  appVersion: '0.0.1',
  commonService: {
    apiKey: 'c721512e7f5e55a1136022cdfd1e1314',
    api: 'https://api.themoviedb.org/3{/type}{/category}{/list}',
    get params () { params: { api_key: this.apiKey } },
    headers: { 'Accept-Language': 'en-US' },
    posterPath: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
    bigPosterPath: 'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'
  }
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
