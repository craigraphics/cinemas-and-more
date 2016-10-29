import knownMovies from './Knownmovies'

export default {
  data () {
    return {
      actor: '',
      path: String(this.$store.state.images.secure_base_url) + String(this.$store.state.images.profile_sizes[2]),
    }
  },
  components: { knownMovies },
  methods: {
    getBack () {
      this.$router.go(window.history.back());
    },
    getPersonId () {
      let personService =  this.$http.get(this.$store.state.commonService.api, { params: {
        type: 'person',
        category: this.$route.params.personId,
        language: this.$route.params.lang,
        api_key: this.$store.state.commonService.apiKey,
      }, headers: this.$store.state.commonService.headers });

      personService
        .then((response) => {
          this.actor = response.body;
        })
        .catch(this.getError)
    },
    getError(err) {
      console.log(err);
    }
  },
  created () {
    this.getPersonId();
  },
  locales: require('../../i18n/Personitem.js'),
  watch: {
    '$route' (to, from) {
      this.getPersonId();
    }
  }
}
