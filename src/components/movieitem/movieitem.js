export default {
  data () {
    return {
      movie: '',
      path: this.$store.state.commonService.bigPosterPath
    }
  },
  methods: {
    getBack () {
      this.$route.go(window.history.back());
    },
    getMovieId () {
      let movieService =  this.$http.get(this.$store.state.commonService.api, { params: {
        type: 'movie',
        category: this.$route.params.movieId,
        api_key: this.$store.state.commonService.apiKey,
      }, headers: this.$store.state.commonService.headers });

      movieService
        .then((response) => this.movie = response.body)
        .catch(this.getError)
    },
    getError ( err ) {
      window.alert(err);
    }
  },
  created () {
    this.getMovieId();
  }
}
