import Vue from 'vue'
import Vuex from 'vuex'
import fethService from './services'

Vue.use(Vuex)

const state = {
  movies: {body: {results: ''}},
  genres: '',
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
  ],
  error: ''
}

const mutations = {
  ADD_MOVIES(state, movies) {
    state.movies = movies;
  },
  ADD_GENRES(state, genres) {
    state.genres = genres;
  },
  CATCH_ERROR(state, error) {
    state.error = error;
  }
}

const actions = {
  getMovies({ commit }, params) {
    return fethService.fetchWebService(state.commonService.api, params)
      .then((response) => commit('ADD_MOVIES', response))
      .catch((error) => commit('CATCH_ERROR', error));
  },
  getGenres({ commit }, params) {
    return fethService.fetchWebService(state.commonService.api, params)
      .then((response) => commit('ADD_GENRES', response.body.genres))
      .catch((error) => commit('CATCH_ERROR', error));
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
