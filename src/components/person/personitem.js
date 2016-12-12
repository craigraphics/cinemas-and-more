import knownMovies from './Knownmovies';
import myMovieMixin from '../../mixins/vue-mixins';

export default {
  data () {
    return {
      actor: '',
      path: this.$store.state.images.secure_base_url + this.$store.state.images.profile_sizes[2],
    }
  },
  components: { knownMovies },
  methods: {
    init() {
      let vm = this;
      let params =  { params: {
        type: 'person',
        category: vm.$route.params.personId,
        language: vm.$route.params.lang,
        api_key: vm.$store.state.commonService.apiKey,
      }, headers: vm.$store.state.commonService.headers };

      vm.$store.dispatch('getPerson', params)
        .then(() => vm.actor = vm.$store.state.person.body)
        .catch(vm.getError);
    }
  },
  mixins:[myMovieMixin],
  created () {
    this.init();
  },
  locales: require('../../i18n/Personitem.js'),
  watch: {
    '$route' (to, from) {
      this.init();
    }
  }
}
