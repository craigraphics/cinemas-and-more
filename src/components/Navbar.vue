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
        <router-link :to="{ name: 'home'}" class="navbar-brand">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-film fa-stack-1x fa-inverse"></i>
          </span>
          {{$store.state.appTitle}}
        </router-link>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><router-link :to="{ name: 'home'}" class="nav-item nav-link" v-translate>{{t('Home')}}</router-link></li>
          <li><router-link :to="{ name: 'movielists', params: {cat: 'nowplaying', lang: $store.state.commonService.lang, pageNumber: 1 }}" class="nav-item nav-link" v-translate>{{t('Now Playing')}}</router-link></li>
          <li><router-link :to="{ name: 'movielists', params: {cat: 'toprated', lang: $store.state.commonService.lang, pageNumber: 1 }}" class="nav-item nav-link" v-translate>{{t('Top Rated')}}</router-link></li>
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
  @import '../scss/brand-variables';

  .navbar-inverse .navbar-toggle .icon-bar {
    background-color: $white;
  }
  .navbar-brand {
    .fa-lg {
      font-size: 17px;
      margin-top: -5px;
    }
    .fa-circle {
      color: $logo-color;
    }
    .fa-inverse {
      color: #000;
      font-weight: 600;
    }
  }
</style>
