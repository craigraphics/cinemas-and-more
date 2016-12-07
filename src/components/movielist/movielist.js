import myMovieMixin from '../../mixins/vue-mixins';
import Card from './card'
import Pagination from '../Pagination'
require('match-media');

export default {
  data() {
    return {
      page:  parseInt(this.$route.params.pageNumber),
      lang: this.$route.params.lang,
      movies: '',
      genres: '',
      path: this.$store.state.images.secure_base_url +  this.$store.state.images.backdrop_sizes[0],
      pageTitle: this.$route.params.cat,
      column: 4,
      totalPages: ''
    }
  },
  components: { Card, Pagination },
  mixins:[myMovieMixin],
  methods: {
    init() {
      let vm = this;
      vm.$store.dispatch('getMovies',  { params: {
        type: 'movie',
        category: this.getCategory(this.$route.params.cat).cat,
        api_key: this.$store.state.commonService.apiKey,
        language: this.$route.params.lang,
        page: this.$route.params.pageNumber
      }, headers: this.$store.state.commonService.headers })
      .then(vm.getMovies)
      .then(vm.setGenreNames)
    },
    setColumns(number) {
      this.column = number;
    },
    setGenreNames() {
      let vm = this;
      let genreArr = vm.$store.state.genres;
      let tempArr = [];

      vm.movies.some((film) => {
        let genre_name = [];
        film.genre_ids.some((id) => {
          genreArr.some((genre) => {
            if(genre.id === id) {
              genre_name.push(genre.name);
            }
          });
        });
        tempArr.push(genre_name);
      });

      vm.$nextTick(function () {
        vm.genres = tempArr;
      });
    },
    getMovies() {
      let vm = this;
      vm.movies = vm.$store.state.movies.body.results;
      vm.pageTitle = this.getCategory(this.$route.params.cat).pageTitle || 'Movies:';
      vm.totalPages = vm.$store.state.movies.body.total_pages;

      if (matchMedia('only screen and (max-width: 480px)').matches) {
        vm.path = vm.$store.state.images.secure_base_url + vm.$store.state.images.backdrop_sizes[0];
      } else {
        vm.path = vm.$store.state.images.secure_base_url + vm.$store.state.images.backdrop_sizes[1];
      }
    }
  },
  locales: require('../../i18n/Movielist.js'),
  created () {
    this.$store.dispatch('getGenres', {
      params:  { type: 'genre', category: 'movie', list: 'list', api_key:  this.$store.state.commonService.apiKey },
      headers: this.$store.state.commonService.headers });
    this.init();
  },
  computed: {
    newMovies() {
      return this.$store.state.movies.body.results;
    }
  },
  watch: {
    '$route' (to, from) {
      this.init();
    }
  }
}
