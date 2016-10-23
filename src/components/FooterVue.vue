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
  import myMovieMixin from '../mixins/vue-mixins';
  export default {
    locales: require('../i18n/Footer.js'),
    mixins:[myMovieMixin]
  }
</script>

<style lang="scss" scoped>

  footer {
    background-color:  #222 ;
    padding: 20px 50px 100px;
    color: #FFF;
  }
  .list-inline {
    padding-left: 13px;
    margin-bottom: 0;
  }
</style>
