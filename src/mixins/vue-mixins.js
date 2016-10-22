
var myMovieMixin = {
  methods: {
      setLanguage(lang) {
        this.$store.state.commonService.lang = lang;
        this.$translate.setLang(this.$store.state.commonService.lang);

        switch (this.$route.name) {
          case 'movielists':
            this.$router.push({name: 'movielists', params: {cat: 'nowplaying', lang: lang, pageNumber: this.$route.params.pageNumber }});
            break;          
        }
      },
      getCategory(category) {
        let filter = this.$store.state.cats.filter((obj) => obj.name == category);
        return filter[0];
      }
  }
};

export default myMovieMixin;
