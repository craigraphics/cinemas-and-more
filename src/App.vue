<template>
  <main id="app" class="app" role="main">
    <section class="main-wrapper">
      <navbar></navbar>
      <router-view></router-view>
    </section>
    <footer-vue></footer-vue>
  </main>
</template>

<script>
import Navbar from './components/Navbar'
import FooterVue from './components/FooterVue'

export default {
  components: { Navbar, FooterVue },
  created() {
    this.$store.dispatch('getGenres', {
      params:  { type: 'genre', category: 'movie', list: 'list', api_key:  this.$store.state.commonService.apiKey },
      headers: this.$store.state.commonService.headers });
  },
}
</script>

<style lang="scss">
  // pre
  @import './scss/brand-variables';

  // Bootstrap
  @import "node_modules/bootstrap/scss/custom";
  @import "node_modules/bootstrap/scss/variables";
  @import "node_modules/bootstrap/scss/mixins";

  // Reset and dependencies
  @import "node_modules/bootstrap/scss/normalize";
  @import "node_modules/bootstrap/scss/print";

  // Core CSS
  @import "node_modules/bootstrap/scss/reboot";
  @import "node_modules/bootstrap/scss/type";
  @import "node_modules/bootstrap/scss/images";
  @import "node_modules/bootstrap/scss/code";
  @import "node_modules/bootstrap/scss/grid";
  @import "node_modules/bootstrap/scss/forms";
  @import "node_modules/bootstrap/scss/buttons";

  // Components
  @import "node_modules/bootstrap/scss/animation";
  @import "node_modules/bootstrap/scss/dropdown";
  @import "node_modules/bootstrap/scss/custom-forms";
  @import "node_modules/bootstrap/scss/nav";
  @import "node_modules/bootstrap/scss/navbar";
  @import "node_modules/bootstrap/scss/card";
  @import "node_modules/bootstrap/scss/tags";
  @import "node_modules/bootstrap/scss/responsive-embed";
  @import "node_modules/bootstrap/scss/close";
  @import "node_modules/bootstrap/scss/pagination";
  @import "node_modules/bootstrap/scss/media";

  // Components w/ JavaScript
  @import "node_modules/bootstrap/scss/tooltip";

  // Utility classes
  @import "node_modules/bootstrap/scss/utilities";

  // font awesome
  $fa-font-path: '../node_modules/font-awesome/fonts/';
  @import 'node_modules/font-awesome/scss/font-awesome';

  //some styling adaptations
  @import 'scss/main';

</style>
