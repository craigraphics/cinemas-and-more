<template>
  <div class="">
    <div class="well">
      <div class="row">
        <div class="col-sm-5 text-right">
          <img class="logo" src="../assets/logo.png">
        </div>
        <div class="col-sm-7 text-left">
          <h1 v-translate>Hello Vue !</h1>
        </div>
      </div>
      <div class="row text-center">
        <span v-translate>Change Language</span> : &nbsp;&nbsp;&nbsp;
        <button class="btn btn-default btn-xs" @click="$translate.setLang('en')">EN</button>
        <button class="btn btn-default btn-xs" @click="$translate.setLang('fr')">FR</button>
        <button class="btn btn-default btn-xs" @click="$translate.setLang('es')">ES</button>
      </div>
    </div>
    <br /><br />
    <h4> Welcome to your Vue.js app </h4>
    <hr />
    <p>
      To get a better understanding of how this boilerplate works, please check out
      <a href="https://github.com/ssouron/vuestart/blob/master/README.md" target="_blank">its Readme file</a>
      , and the original template detailed
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">documentation</a>
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/ssouron/vuestart" target="_blank">repository</a>.
    </p>
    <p>
      Several external addins or libraries are implemented in this rig. You can checkout their pages to find documentation and related stuff :
      <ul>
        <li>
          <b><a href="https://github.com/vuejs/vue-resource" target="_blank">Vue Resource</a></b>
          : Http and Ajax requests from your Vue app.
        </li>
        <li>
          <b><a href="https://github.com/vuejs/vue-router" target="_blank">Vue Router</a></b>
          : Routing without page reloading.
        </li>
        <li>
          <b><a href="https://github.com/vuejs/vuex/" target="_blank">VueX</a></b>
          : State and event store management.
        </li>
        <li>
          <b><a href="https://github.com/javisperez/vuetranslate" target="_blank">Vue Translate</a></b>
          : Internationalisation plugin.
        </li>
        <li>
          <b><a href="http://getbootstrap.com/" target="_blank">Bootstrap</a></b>
          : SASS version of the styling framework, including components.
        </li>
        <li>
          <b><a href="http://fontawesome.io/" target="_blank">Font Awesome</a></b>
          : SASS version of the icon provider.
        </li>
      </ul>
    </p>
    <hr />
    <h4> Build an amazing application ! </h4>
  </div>



</template>

<script>
  export default {
    locales: require('../i18n/Hello.js')
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  h1
    color: #42b983
  .logo
    width: 80px
    height: 80px
</style>
