<template>

  <div class="row text-xs-center flex-items-xs-center cast" v-if="movies.length">
    <figure class="col-sm-6 col-md-4 col-lg-3" v-for="(movie, index) in movies" v-if="index < 8" >
      <router-link :to="{ name: 'movie', params: { lang: $store.state.commonService.lang, movieId: movie.id }}">
        <img
          class="card-img-top img-fluid"
          v-if="movie.poster_path"
          v-bind:src="path + movie.poster_path"
          v-bind:alt="movie.title + ' poster'">
        <img
          v-if="!movie.poster_path"
          class="card-img-top img-fluid"
          src="../../assets/no-image.gif"
          >
      </router-link>
      <figcaption class="text-xs-center">
        <h6 class="text-truncate title">
          <router-link :to="{ name: 'movie', params: { lang: $store.state.commonService.lang, movieId: movie.id }}">
            {{ movie.title }}
          </router-link>
        </h6>
      </figcaption>
    </figure>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        movies: '',
        path: String(this.$store.state.posterPath.url) +  String(this.$store.state.posterPath.smallVertical),
      }
    },
    methods: {
      getKnownMovies() {
        let personService =  this.$http.get(this.$store.state.commonService.api, { params: {
          type: 'person',
          category: this.$route.params.personId,
          list: 'movie_credits',
          language: this.$route.params.lang,
          api_key: this.$store.state.commonService.apiKey,
        }, headers: this.$store.state.commonService.headers });

        personService
          .then((response) => this.movies = response.body.cast)
          .catch(this.getError)
      },
      getError(err) {
        console.log(err);
      }
    },
    created () {
      this.getKnownMovies();
    },
    watch: {
      '$route' (to, from) {
        this.getKnownMovies();
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../scss/brand-variables';
  .title {
    a {
      color:$white;
      font-size: .8rem;
      &:hover {
        text-decoration: none;
      }
    }

  }
</style>
