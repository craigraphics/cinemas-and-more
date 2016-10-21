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
  // Bootstrap
  $icon-font-path: '../node_modules/bootstrap-sass/assets/fonts/bootstrap/';
  $link-color: #42b983;
  $brand-success: #42b983;

  $font-size-base: 16px;

  $navbar-inverse-link-color: white;
  $navbar-inverse-brand-color: white;
  $navbar-inverse-bg:black;

  // @import 'node_modules/bootstrap-sass/assets/stylesheets/bootstrap';

  // Core variables and mixins
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/variables";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins";
    // Reset and dependencies
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/normalize";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/print";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/glyphicons";

  // Core CSS
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/scaffolding";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/type";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/code";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/grid";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/tables";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/forms";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/buttons";
    @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/labels";

  // Components
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/component-animations";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/navs";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/navbar";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/alerts";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/responsive-embed";

  // Components w/ JavaScript
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/modals";

  // Utility classes
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/utilities";
  @import "node_modules/bootstrap-sass/assets/stylesheets/bootstrap/responsive-utilities";

  // font awesome
  $fa-font-path: '../node_modules/font-awesome/fonts/';
  @import 'node_modules/font-awesome/scss/font-awesome';

  //some styling adaptations
   @import 'scss/paper';
   @import 'scss/main';


</style>
