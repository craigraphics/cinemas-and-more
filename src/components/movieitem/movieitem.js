export default {
  data () {
    return {
      movie: '',
      path: (String(this.$store.state.posterPath.url) + String(this.$store.state.posterPath.bigVertical)),
      creditsPath: (String(this.$store.state.posterPath.url) + String(this.$store.state.posterPath.squared)),
      languages: '',
      genres: '',
      countries: '',
      credits: '',
      cast: '',
      director: '',
      producer: '',
      profilePaths: []
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
          this.languages = this.movie.spoken_languages;
          this.genres = this.movie.genres;
          this.countries =  this.movie.production_countries;
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
        this.credits = response.body;
        this.cast = this.credits.cast;

        for (let value of this.cast) {
          this.profilePaths.push(value.profile_path);
        }

        this.credits.crew.filter((obj) => {
           (obj.job === 'Director') ? this.director = obj.name : 'N/A';
           (obj.job === 'Producer') ? this.producer = obj.name : 'N/A';
        });

      })
      .catch(this.getError);

    },
    getError(err) {
      console.log(err);
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
