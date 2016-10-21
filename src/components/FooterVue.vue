<template>
  <footer class="text-center">
    <ul class="list-inline">
      <li v-translate>Translate:</li>
      <li><button class="btn btn-link btn-sm" @click="setLanguage('en-US')">English</button></li>
      <li><button class="btn btn-link btn-sm" @click="setLanguage('es')">Español</button></li>
    </ul>
    <small class="text-center">{{$store.state.appTitle}} <span v-translate>is created by craigraphcis, 2016</span></small>
  </footer>
</template>

<script>
  export default {
    locales: require('../i18n/Footer.js'),
    methods: {
      setLanguage (lang) {
        this.$store.state.commonService.lang = lang;
        this.$translate.setLang(this.$store.state.commonService.lang);

        switch (this.$route.name) {
          case 'movies':
            this.$router.push({name: 'movies', params: { lang: lang, pageNumber: this.$route.params.pageNumber }});
            break;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $black: #000000;
  footer {
    margin-top: 100px;
    background-color:  #222 ;
    padding: 20px 50px 100px;
    color: #FFF;
  }
</style>
