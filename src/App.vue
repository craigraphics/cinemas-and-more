<template>
  <main id="app">
    <navbar></navbar>
    <div class="container">
      <router-view></router-view>
    </div>
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
  // Bootstrap
  $icon-font-path: '../node_modules/bootstrap-sass/assets/fonts/bootstrap/';
  $link-color: #42b983;
  $brand-success: #42b983;

  $navbar-inverse-link-color: white;
  $navbar-inverse-brand-color: white;
  $navbar-inverse-bg:black;

  @import 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap';


  // font awesome
  $fa-font-path: '../node_modules/font-awesome/fonts/';
  @import 'node_modules/font-awesome/scss/font-awesome';

  //some styling adaptations
   @import 'scss/paper';

</style>
