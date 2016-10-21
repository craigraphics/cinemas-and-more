<template>
  <div class="container hello">
    <div class="well">
      <h1 class="text-center" v-translate>Hello movie buff!</h1>
      <div class="row text-center">
        <span v-translate>Change Language</span> : &nbsp;&nbsp;&nbsp;
        <button class="btn btn-default btn-xs" @click="setLanguage('en-US')">EN</button>
        <button class="btn btn-default btn-xs" @click="setLanguage('es')">ES</button>
      </div>
    </div>

    <h3> <span v-translate>Welcome to the</span>  {{$store.state.appTitle}} </h3>
    <hr />
    <h4 v-translate>About this site</h4>
    <p v-translate>The {{$store.state.appTitle}} is a very small project created in 2016 to help the media center community serve the movies now playing in theaters.</p>
    <router-link
      :to="{ name: 'nowplaying', params: { lang: $store.state.commonService.lang, pageNumber: 1 }}"
      class="btn lg btn-success">
      <span v-translate>Take me to the movie list!</span>
    </router-link>
  </div>
</template>

<script>
  import myMovieMixin from '../mixins/vue-mixins';

  export default {
    locales: require('../i18n/Hello.js'),
    mixins:[myMovieMixin]
  }
</script>

<style lang="scss" scoped>
  @import '../scss/brand-variables';
  .container {
    padding: $space 0 ($space*4) 0;
  }
  h1 {
    color: #42b983;
  }
</style>
