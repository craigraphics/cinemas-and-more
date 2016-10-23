import myMovieMixin from '../../mixins/vue-mixins';
import Card from './card'
require('match-media');

export default {
  data() {
    return {
      page:  Number(this.$route.params.pageNumber),
      lang: this.$route.params.lang,
      movies: '',
      genres: '',
      path: this.$store.state.commonService.posterPath,
      pageTitle: this.$route.params.cat
    }
  },
  components: { Card },
  mixins:[myMovieMixin],
  methods: {
    nextPage() {
      this.lang = this.$store.state.commonService.lang;
      this.page += 1;
      this.$store.state.page = this.page;
      this.$router.push({name: 'movielists', params: {cat:this.$route.params.cat, lang: this.lang, pageNumber: this.page }});
    },
    prevPage() {
      this.lang = this.$store.state.commonService.lang;
      (this.page <= 1)  ? this.page = 1 : this.page -= 1;
      this.$store.state.page = this.page;
      this.$router.push({name: 'movielists', params: {cat:this.$route.params.cat, lang: this.lang, pageNumber: this.page }});
    },
    getMovies(page) {
      function getGenres() {
        let vm = this;

        vm.pageTitle = vm.getCategory(this.$route.params.cat).pageTitle;

        if (matchMedia('only screen and (max-width: 480px)').matches) {
          vm.path = this.$store.state.commonService.smallWidePosterPath;          
        }

        function arrangeGenres (data) {
          let genreArr = data.body.genres;
          let tempArr = [];

          vm.movies.some(function (film) {
            let genre_name = [];
            film.genre_ids.some( function (id) {
              genreArr.some( function (genre) {
                if( genre.id === id ) {
                  genre_name.push(genre.name);
                }
              });
            });
            tempArr.push(genre_name);
          });

          vm.$nextTick(function () {
            vm.genres = tempArr;
            vm.pageTitle = vm.getCategory(this.$route.params.cat).pageTitle;
          });
        }

        genresService
          .then(arrangeGenres)
          .catch(vm.getError);
      }

      let listService =  this.$http.get(this.$store.state.commonService.api, { params: {
        type: 'movie',
        category: this.getCategory(this.$route.params.cat).cat,
        api_key: this.$store.state.commonService.apiKey,
        language: this.$route.params.lang,
        page: this.$route.params.pageNumber
      }, headers: this.$store.state.commonService.headers });

      let genresService =  this.$http.get(this.$store.state.commonService.api, { params: {
        type: 'genre',
        category: 'movie',
        list: 'list',
        api_key: this.$store.state.commonService.apiKey,
      }, headers: this.$store.state.commonService.headers });

      listService
        .then((data) => this.movies = data.body.results )
        .then(getGenres)
        .catch(this.getError)
    },
    getError(err) {
      console.log(err.statusText);
    }
  },
  computed: {
    evenNumbers () {
      return this.movies.results.filter( (number) =>  number % 2 === 0 );
    }
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
