<template>
    <header class="pos-s-t">
      <nav class="navbar navbar-dark bg-inverse1 navbar-static-top">
        <div class="container">
          <button
            class="navbar-toggler hidden-sm-up collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#exCollapsingNavbar"
            aria-expanded="false"
            aria-controls="exCollapsingNavbar"
            aria-label="Toggle navigation">
          </button>

          <div
            class="navbar-toggleable-xs collapse"
            id="exCollapsingNavbar"
            aria-expanded="false">

            <router-link :to="{ name: 'home'}" class="navbar-brand">
              <span class="fa-stack fa-lg">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-film fa-stack-1x fa-inverse"></i>
              </span>
              {{$store.state.appTitle}}
            </router-link>

            <ul class="nav navbar-nav float-md-right">
              <li class="nav-item " v-bind:class="{active : $router.name == 'home'}"><router-link :to="{ name: 'home'}" class="nav-link" v-translate>{{t('Home')}}</router-link></li>
              <li class="nav-item"><router-link :to="{ name: 'movielists', params: {cat: 'nowplaying', lang: $store.state.commonService.lang, pageNumber: 1 }}" class="nav-link" v-translate>{{t('Now Playing')}}</router-link></li>
              <li class="nav-item"><router-link :to="{ name: 'movielists', params: {cat: 'toprated', lang: $store.state.commonService.lang, pageNumber: 1 }}" class="nav-link" v-translate>{{t('Top Rated')}}</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
      <search></search>

    </header>
</template>

<script>
  import Search from './Search';

  export default {
    locales: require('../i18n/Navbar.js'),
    components: { Search }
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
