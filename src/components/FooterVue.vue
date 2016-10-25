<template>
  <footer class="text-center">
    <div class="row flex-items-xs-center">
      <div class="col-lg-3 text-xs-center">
        <ul class="list-inline text-xs-center">
          <li class="list-inline-item" v-translate>Translate:</li>
          <li class="list-inline-item"><button class="btn btn-link btn-sm" @click="setLanguage('en-US')">English</button></li>
          <li class="list-inline-item"><button class="btn btn-link btn-sm" @click="setLanguage('es')">Español</button></li>
        </ul>
        <small>{{$store.state.appTitle}} <span v-translate>is created by craigraphcis, 2016</span></small>
      </div>
    </div>
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
    margin-left: -10px;
    margin-bottom: 0;
  }
</style>
