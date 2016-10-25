<template>
  <main id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footer-vue></footer-vue
  </main>
</template>

<script>
import Navbar from './components/Navbar'
import FooterVue from './components/FooterVue'

export default {
  components: { Navbar, FooterVue }
}
</script>

<style lang="scss">
   @import 'scss/variables';
  // // Bootstrap
  // $link-color: #42b983;
  // $brand-success: #42b983;
  //
  // $font-size-base: 16px;
  //
  // $navbar-inverse-link-color: white;
  // $navbar-inverse-brand-color: white;
  // $navbar-inverse-bg:black;

  @import './scss/brand-variables';

  @import 'node_modules/bootstrap/scss/bootstrap';


  // font awesome
  $fa-font-path: '../node_modules/font-awesome/fonts/';
  @import 'node_modules/font-awesome/scss/font-awesome';

  //some styling adaptations
  //  @import 'scss/paper';
    @import 'scss/main';


</style>
