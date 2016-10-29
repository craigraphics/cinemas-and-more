export default {
  data () {
    return {
      movie: '',
      path: String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.poster_sizes[4]),
      backPath: String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.backdrop_sizes[0]),
      creditsPath: String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.profile_sizes[1]),
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

          if (matchMedia('only screen and (max-width: 480px)').matches) {
            this.backPath = String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.backdrop_sizes[0]);
          } else if (matchMedia('only screen and (max-width: 780px)').matches) {
            this.backPath = String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.backdrop_sizes[1]);
          } else {
            this.backPath = String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.backdrop_sizes[2]);
          }


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
