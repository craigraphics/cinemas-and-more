<template>
  <div class="">
    <form class="results-form" v-on:submit.prevent>
      <div class="container">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" v-model="question" class="form-control" v-bind:placeholder="t(placeholder)" >
      </div>
    </form>

    <div class="results" v-if="isVisible()">
      <div class="container">
        <button class="btn btn-transparent btn-lg close-search float-xs-right" type="button" name="button" v-on:click="clearSearch()">&times;</button>
        <div class="" v-if="noResults" v-translate>no results</div>
        <i v-if="loading" class="fa fa-spinner fa-pulse fa-fw"></i>
        <template  v-for="(result, index) in results">
          <router-link :to="{ name: 'person', params: { lang: $store.state.commonService.lang, personId: result.id }}">
            <div class="media" v-if="result.media_type == 'person'">
              <div class="media-left media-middle">
                <img
                  class="media-object img-fluid"
                  v-bind:src="path + result.profile_path"
                  v-if="result.profile_path"
                  v-bind:alt="result.name + ' picture'">
                <img
                  class="card-img-top img-fluid"
                  v-if="!result.profile_path"
                  src="../assets/no-user.gif"
                  v-bind:alt="result.name + ' poster'">
              </div>
              <div class="media-body media-middle mt-1">
                <h4 class="media-heading mb-0"> {{result.name}} <small class="tag tag-success tag-sm">person</small></h4>
                <ul class="list-inline mb-0 mt-0">
                  <li v-for="(movie, j) in result.known_for" class="list-inline-item">{{movie.title}}</li>
                </ul>
              </div>
            </div>
            </router-link>

            <router-link :to="{ name: 'movie', params: { lang: $store.state.commonService.lang, movieId: result.id }}">
              <div class="media" v-if="result.media_type == 'movie'">
                <div class="media-left media-middle">
                  <img
                    class="media-object img-fluid"
                    v-bind:src="path + result.poster_path"
                    v-if="result.poster_path"
                    alt="Generic placeholder image">
                  <img
                    class="card-img-top img-fluid"
                    v-if="!result.poster_path"
                    src="../assets/no-image.gif"
                    v-bind:alt="result.title + ' poster'">
                </div>
                <div class="media-body media-middle mt-1">
                  <h4 class="media-heading mb-0"> {{result.title}} <small class="tag tag-default tag-sm">movie</small></h4>
                  <p> {{result.release_date | dateformat('YYYY')}} </p>
                </div>
              </div>
            </router-link>

        </template>
      </div>
    </div>
  </div>
</template>

<script>
  var _ = require('lodash');

  export default {
    data() {
      return {
        noResults : false,
        question: '',
        results: '',
        loading: false,
        placeholder: 'Search for a movie or person...',
        path: String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.profile_sizes[1])
      }
    },
    locales: require('../i18n/Search.js'),
    watch: {
      question(newQuestion) {
        this.results = ' ';
        this.loading = true;
        this.getAnswer();
      },
      '$route' (to, from) {
        this.clearSearch();
      }
    },
    methods: {
      clearSearch() {
        this.question = '';
        this.results = '';
      },
      isVisible() {
        let isVisible = false;
        (this.question.length /*&& this.results.length*/ ) ? isVisible = true : isVisible = false;
        return isVisible;
      },
      manageResults() {
        let vm = this;
        let results = vm.$store.state.results.body.results;
        vm.loading = false;
        vm.noResults = false;

        vm.results = _.filter(results, function(result, index) {
          if(result.media_type === 'movie' || result.media_type === 'person') {
            return result;
          }
        });

        if (!vm.results.length) {
          vm.loading = false;
          vm.noResults = true;
        }
      },
      getAnswer: _.debounce(function() {
          let vm = this;
          vm.results = 'Searching...';
          vm.noResults = false;
          let params = {
            before() {
              vm.loading = true;
            },
              params: {
              type: 'search',
              category: 'multi',
              query: vm.question,
              api_key: this.$store.state.commonService.apiKey,
            }, headers: this.$store.state.commonService.headers };

          if (vm.question.length) {
            vm.$store.dispatch('getResults', params)
              .then(vm.manageResults)
              .catch((error) => vm.results = 'Error! Could not reach the API. ' + error);
          }
        },
        500
      )}
  }
</script>

<style lang="scss" scoped>
  @import '../scss/brand-variables';
  $light-gray:#b1afac;

  .results-form {
    background-color: $white;
    position: relative;
    border-bottom: 1px solid lighten($light-gray, 20%);

    .form-control {
      border:none;
      padding-left: 1.4rem;
    }

    .fa-search {
      position: absolute;
      top: 9px;
      color: $light-gray;

    }
  }

  .results {
    position: absolute;
    background-color: $white;
    z-index: 2;
    max-height: 80%;
    width:100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 1rem;
    padding-bottom: 1rem;

    a {
      display: block;
      &:hover {
        background-color: lighten($navbar-bg-color,75%);
        text-decoration: none;
      }
    }

    .media {
      margin-bottom: .5rem;

      h4 {
        font-size:1.5rem;
        font-weight: 600;
        color: darken($brand-color, 15%);
      }
      .tag {
        font-size:.8rem;
        background-color: lighten($navbar-bg-color,50%);
        position: relative;
        top: -4px
      }
      img {
        max-width: 48px; height: auto;
      }
    }
  }
  .close-search {
    color: lighten($navbar-bg-color,30%);
    font-family: Arial;
    font-size: 1.8rem;
    padding: 0;
    line-height: 1;
    &:hover {
      color: $navbar-bg-color;
    }
  }
</style>
