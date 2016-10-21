<template>
  <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/"> {{$store.state.appTitle}}</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link :to="{ name: 'home'}" class="nav-item nav-link" v-translate> Home </router-link></li>
          <li><router-link :to="{ name: 'movies', params: { lang: $store.state.commonService.lang, pageNumber: 1 }}" class="nav-item nav-link" v-translate> Movies </router-link></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  export default {
    locales: require('../i18n/Navbar.js')
  }
</script>

<style lang="scss" scoped>
  .navbar-inverse .navbar-toggle .icon-bar {
    background-color: white;
  }
</style>
