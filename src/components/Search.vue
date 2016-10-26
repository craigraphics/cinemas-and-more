<template>
  <div class="">
    <form class="results-form" v-on:submit.prevent>
      <div class="container">
        <i class="fa fa-search" aria-hidden="true"></i>
        <input type="text" v-model="question" class="form-control" placeholder="Search for a movie or person">
      </div>
    </form>

    <div class="results" v-if="isVisible()">
      <div class="container">
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
              <div class="media-body media-middle">
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
                <div class="media-body media-middle">
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
        hasMore: true,
        list: [],
        page: 1,
        search : '',
        question: '',
        results: '',
        path: String(this.$store.state.posterPath.url) +  String(this.$store.state.posterPath.smallVertical)
      }
    },
    locales: require('../i18n/Navbar.js'),
    watch: {
      question(newQuestion) {
        this.results = ' ';
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
        (this.question.length && this.results.length) ? isVisible = true : isVisible = false;
        return isVisible;
      },
      getAnswer: _.debounce(function() {
          let vm = this;
          vm.results = 'Searching...';

          if (vm.question.length) {

            this.$http.get(this.$store.state.commonService.api, { params: {
              type: 'search',
              category: 'multi',
              query: vm.question,
              api_key: this.$store.state.commonService.apiKey,
            }, headers: this.$store.state.commonService.headers })
              .then((response)=> {
                let results = response.body.results;

                vm.results = _.filter(results, function(result, index) {
                  if( result.media_type === 'movie' || result.media_type === 'person') {
                    return result;
                  }
                });

              })
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

    .media {
      margin-bottom: .5rem;
      &:nth-child(odd) {
          // background-color: lighten($navbar-bg-color,80%);
      }

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
</style>
