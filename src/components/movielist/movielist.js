import myMovieMixin from '../../mixins/vue-mixins';
import Card from './card'
import Pagination from '../Pagination'
require('match-media');

export default {
  data() {
    return {
      page:  Number(this.$route.params.pageNumber),
      lang: this.$route.params.lang,
      movies: '',
      genres: '',
      path: String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.backdrop_sizes[0]),
      pageTitle: this.$route.params.cat,
      column: 4,
      totalPages: ''
    }
  },
  components: { Card, Pagination },
  mixins:[myMovieMixin],
  methods: {
    setColumns(number) {
      this.column = number;
    },
    setGenreNames() {
      let vm = this;

      let genresService =  this.$http.get(this.$store.state.commonService.api, { params: {
        type: 'genre',
        category: 'movie',
        list: 'list',
        api_key: this.$store.state.commonService.apiKey,
      }, headers: this.$store.state.commonService.headers });

      function arrangeGenres (data) {
        let genreArr = data.body.genres;
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
      }

      genresService
        .then(arrangeGenres)
        .catch(vm.getError);
    },
    getMovies() {
      let listService =  this.$http.get(this.$store.state.commonService.api, { params: {
        type: 'movie',
        category: this.getCategory(this.$route.params.cat).cat,
        api_key: this.$store.state.commonService.apiKey,
        language: this.$route.params.lang,
        page: this.$route.params.pageNumber
      }, headers: this.$store.state.commonService.headers });

      listService
        .then((data) => {
          this.movies = data.body.results;
          this.pageTitle = this.getCategory(this.$route.params.cat).pageTitle;
          this.totalPages = data.body.total_pages;

          if (matchMedia('only screen and (max-width: 480px)').matches) {
            this.path = String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.backdrop_sizes[0]);
          } else {
            this.path = String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.backdrop_sizes[1]);
          }
        })
        .then(this.setGenreNames)
        .catch(this.getError)
    },
    getError(err) {
      console.log(err);
    }
  },
  computed: {
    // evenNumbers () {
    //   return this.movies.results.filter( (number) =>  number % 2 === 0 );
    // }
  },
  locales: require('../../i18n/Movielist.js'),
  created () {
    this.getMovies();
  },
  watch: {
    '$route' (to, from) {
      this.getMovies();
    }
  }
}
