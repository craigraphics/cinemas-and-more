export default {
  data () {
    return {
      movie: '',
      path: this.$store.state.commonService.bigPosterPath,
      credits: '',
      director: '',
      producer: '',
    }
  },
  methods: {
    getBack () {
      this.$router.go(window.history.back());
    },
    getMovieId () {
      let movieService =  this.$http.get(this.$store.state.commonService.api, { params: {
        type: 'movie',
        category: this.$route.params.movieId,
        language: this.$route.params.lang,
        api_key: this.$store.state.commonService.apiKey,
      }, headers: this.$store.state.commonService.headers });

      movieService
        .then((response) => {
          this.movie = response.body;
          this.getCredits();
        })
        .catch(this.getError)
    },
    getCredits() {
      var vm = this;
      let creditService =  this.$http.get(this.$store.state.commonService.api, { params: {
        type: 'movie',
        category: this.$route.params.movieId,
        list: 'credits',
        language: this.$route.params.lang,
        api_key: this.$store.state.commonService.apiKey,
      }, headers: this.$store.state.commonService.headers });

      creditService.then((response) => {
        // console.log(response.body.crew);
        this.credits = response.body;
        this.director = this.credits.crew.filter((obj) => obj.job == 'Director')[0].name;
        this.producer = this.credits.crew.filter((obj) => obj.job == 'Producer')[0].name;
      })

    },
    getError ( err ) {
      window.alert(err);
    }
  },
  created () {
    this.getMovieId();
  },
  locales: require('../../i18n/Movieitiem.js'),
  watch: {
    '$route' (to, from) {
      this.getMovieId();
    }
  }
}
