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
               <img src="../assets/cinemas-logo.svg?65656546546" height="26" alt="Cinemas &amp; More Logo">
              Cinemas & More
            </router-link>

            <ul class="nav navbar-nav float-md-right">
              <li class="nav-item"><router-link :to="{ name: 'home'}" class="nav-link" exact v-translate>{{t('Home')}}</router-link></li>
              <li class="nav-item"><router-link :to="{ name: 'movielists', params: {cat: 'nowplaying', lang: $store.state.commonService.lang, pageNumber: 1 }}" class="nav-link" v-translate>{{t('Now Playing')}}</router-link></li>
              <li class="nav-item"><router-link :to="{ name: 'movielists', params: {cat: 'upcoming', lang: $store.state.commonService.lang, pageNumber: 1 }}" class="nav-link" v-translate>{{t('Upcoming')}}</router-link></li>
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
    img {
      position: relative;
      top: -3px;
    }

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
