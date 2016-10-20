const moment =  require('moment');

export default {
  data() {
    return {
      page:  Number(this.$route.params.pageNumber),
      movies: '',
      genres: '',
      path: this.$store.state.commonService.posterPath
    }
  },
  computed: {

  },
  methods: {
    nextPage() {
      this.page += 1;
      this.$store.state.page = this.page;
      this.$router.push({name: 'movies', params: { pageNumber: this.page }});
    },
    prevPage() {
      (this.page <= 1)  ? this.page = 1 : this.page -= 1;
      this.$store.state.page = this.page;
      this.$router.push({name: 'movies', params: { pageNumber: this.page }});
    },
    getMovies( page ) {
      function getGenres() {
        let vm = this;

        function arrangeGenres ( data ) {
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
          });
        }

        genresService
          .then(arrangeGenres)
          .catch(vm.getError);
      }

      let listService =  this.$http.get(this.$store.state.commonService.api, { params: {
        type: 'movie',
        category: 'now_playing',
        api_key: this.$store.state.commonService.apiKey,
        page: this.$route.params.pageNumber
      }, headers: this.$store.state.commonService.headers });

      let genresService =  this.$http.get(this.$store.state.commonService.api, { params: {
        type: 'genre',
        category: 'movie',
        list: 'list',
        api_key: this.$store.state.commonService.apiKey,
      }, headers: this.$store.state.commonService.headers });

      listService
        .then( ( data ) => this.movies = data.body.results )
        .then( getGenres )
        .catch(this.getError)
    },
    moment ( date ) {
      return moment(date);
    },
    date ( date ) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    },
    getError ( err ) {
      console.log(err);
    }
  },
  computed: {
    evenNumbers () {
      return this.movies.results.filter( (number) =>  number % 2 === 0 );
    }
  },
  filters: {
    moment (date) {
      return moment(date).format('MMMM Do YYYY');
    }
  },
  created () {
    this.getMovies();
  },
  watch: {
    '$route' (to, from) {
      this.getMovies();
    }
  }
}
