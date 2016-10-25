<template>
  <div class="container hello">
    <div class="row flex-items-xs-center">
      <div class="col-md-7 col-xs-12">
        <h1><strong>{{t('Welcome to')}} {{$store.state.appTitle}}</strong></h1>
        <div class="mb-3 mt-0">
          <span v-translate>Change Language</span>:
          <button class="btn btn-secondary btn-sm" @click="setLanguage('en-US')">EN</button>
          <button class="btn btn-secondary btn-sm" @click="setLanguage('es')">ES</button>
        </div>

        <h2>{{t('Hello movie buff!')}}</h2>
        <p v-translate>Welcome to the information you were looking for. Movies playing now in theaters that you can enjoy watching today. Images, overviews and more. You can select your language of choice, either english or spanish. Action, adventure, drama, musicals, animated, here you will find the best movies to watch and enjoy.</p>
        <p><small v-translate>The {{$store.state.appTitle}} is a very small project created in 2016 to help the media center community serve the movies now playing in theaters.</small></p>
        <router-link
          :to="{ name: 'movielists', params: {cat: 'nowplaying', lang: $store.state.commonService.lang, pageNumber: 1 }}"
          class="btn lg btn-success">
          <span v-translate>Now playing</span>
        </router-link>
        <router-link
          :to="{ name: 'movielists', params: {cat: 'toprated', lang: $store.state.commonService.lang, pageNumber: 1 }}"
          class="btn lg btn-success">
          <span v-translate>Top rated</span>
        </router-link>
      </div>
    </div>
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
    padding-top: $space*2;
    padding-bottom: ($space*3);
  }

  h1 {
    color: darken($brand-color, 10%);
  }

  small {
    font-size: 15px;
    line-height: 13px;
  }
</style>
