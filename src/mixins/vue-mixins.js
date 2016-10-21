
var myMovieMixin = {
  methods: {
      setLanguage (lang) {
        this.$store.state.commonService.lang = lang;
        this.$translate.setLang(this.$store.state.commonService.lang);

        switch (this.$route.name) {
          case 'movies':
            this.$router.push({name: 'nowplaying', params: { lang: lang, pageNumber: this.$route.params.pageNumber }});
            break;
        }
      }
  }
};

export default myMovieMixin;
