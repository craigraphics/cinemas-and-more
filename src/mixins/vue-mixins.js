
var myMovieMixin = {
  methods: {
      setLanguage(lang) {
        this.$store.state.commonService.lang = lang;
        this.$translate.setLang(this.$store.state.commonService.lang);
        switch (this.$route.name) {
          case 'movielists':
            this.$router.push({name: 'movielists', params: {cat: this.$route.params.cat, lang: lang, pageNumber: this.$route.params.pageNumber }});
            break;
            case 'movie':
              this.$router.push({name: 'movie', params: {movieId: this.$route.params.movieId,  lang: lang}});
              break;
        }
      },
      getCategory(category) {
        let filter = this.$store.state.cats.filter((obj) => obj.name == category);
        return filter[0];
      },
      scrollToTop(scrollDuration) {
          let scrollStep = -window.scrollY / (scrollDuration / 15),
              scrollInterval = setInterval(function() {
              if ( window.scrollY != 0 ) {
                  window.scrollBy( 0, scrollStep );
              }
              else clearInterval(scrollInterval);
          }, 15);
      },
  }
};

export default myMovieMixin;
