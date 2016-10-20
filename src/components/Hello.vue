<template>
  <div class="">
    <div class="well">
      <h1 class="text-center" v-translate>Hello movie buff!</h1>
      <div class="row text-center">
        <span v-translate>Change Language</span> : &nbsp;&nbsp;&nbsp;
        <button class="btn btn-default btn-xs" @click="$translate.setLang('en')">EN</button>
        <button class="btn btn-default btn-xs" @click="$translate.setLang('es')">ES</button>
      </div>
    </div>

    <h3> Welcome to the {{$store.state.appTitle}} </h3>
    <hr />
    <h4>About this site</h4>
    <p>
      The {{$store.state.appTitle}} is a very small project created in 2016 to help the media center community serve the movies now playing in theaters.
    </p>
    <router-link :to="{ name: 'movies', params: { pageNumber: 1 }}" class="btn btn-lg btn-primary"> Take me to the movie list! </router-link>
  </div>
</template>

<script>
  export default {
    locales: require('../i18n/Hello.js')
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  h1 {
    color: #42b983;
  }
</style>
