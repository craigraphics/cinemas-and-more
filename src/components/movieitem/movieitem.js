import myMovieMixin from '../../mixins/vue-mixins';

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
    init() {
      let vm = this;
      let params =  { params: {
        type: 'movie',
        category: this.$route.params.movieId,
        language: this.$route.params.lang,
        api_key: this.$store.state.commonService.apiKey,
      }, headers: this.$store.state.commonService.headers };

      vm.$store.dispatch('getSingleMovie', params)
        .then(vm.getMovieId)
        .then(vm.getCredits);
    },
    getMovieId() {
      let vm = this;
      vm.movie = vm.$store.state.movie.body;
      vm.languages = vm.movie.spoken_languages;
      vm.genres = vm.movie.genres;
      vm.countries =  vm.movie.production_countries;

      if (matchMedia('only screen and (max-width: 480px)').matches) {
        vm.backPath = String(vm.$store.state.images.secure_base_url) +  String(vm.$store.state.images.backdrop_sizes[0]);
      } else if (matchMedia('only screen and (max-width: 780px)').matches) {
        vm.backPath = String(vm.$store.state.images.secure_base_url) +  String(vm.$store.state.images.backdrop_sizes[1]);
      } else {
        vm.backPath = String(vm.$store.state.images.secure_base_url) +  String(vm.$store.state.images.backdrop_sizes[2]);
      }
      vm.scrollToTop(100);

    },
    getCredits() {
      let vm = this;
      let params = { params: {
        type: 'movie',
        category: this.$route.params.movieId,
        list: 'credits',
        language: this.$route.params.lang,
        api_key: this.$store.state.commonService.apiKey,
      }, headers: this.$store.state.commonService.headers }

      vm.$store.dispatch('getCredits', params)
        .then((response) => {
          vm.credits = vm.$store.state.credits.body;
          vm.cast = vm.credits.cast;

          for (let value of vm.cast) {
            vm.profilePaths.push(value.profile_path);
          }

          vm.credits.crew.filter((obj) => {
             (obj.job === 'Director') ? vm.director = obj.name : 'N/A';
             (obj.job === 'Producer') ? vm.producer = obj.name : 'N/A';
          });

        })
        .catch(this.getError);

    },
    getError(err) {
      console.log(err);
    }
  },
  mixins:[myMovieMixin],
  created () {
    this.init();
  },
  locales: require('../../i18n/Movieitiem.js'),
  watch: {
    '$route' (to, from) {
      this.init();
    }
  }
}
