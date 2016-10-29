<template>
  <section>
    <div class="container">
      <div class="row flex-items-xs-center">
        <div class="col-md-7 col-xs-12">
          <h2>Upcoming:</h2>
        </div>
      </div>
    </div>
    <div class="wrap mb-3">
      <div class="row-wrapper">
        <template v-for="(film, index) in movies">
          <div
            class="img-effect"
            v-bind:class="[(index === 0) ? 'img-content-wide':'img-content']"
            v-if="index < 11 && film.poster_path"
            v-bind:style="{ backgroundImage: 'url(' + [(index === 0) ? bigPath : smallPath] + film.poster_path  + ')' }">
            <router-link :to="{ name: 'movie', params: {movieId: film.id , lang: $store.state.commonService.lang, pageNumber: 1 }}">
                <div class="mask">
                  <div class="content">
                    <h3>{{film.title}}</h3>
                    <small>read more</small>
                  </div>
                </div>
              </router-link>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        movies: '',
        smallPath: String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.backdrop_sizes[0]),
        bigPath: String(this.$store.state.images.secure_base_url) +  String(this.$store.state.images.backdrop_sizes[1])
      }
    },
    computed: {
      setFirst() {
         return true
      }
    },
    mounted () {},
    methods: {
      getUpcoming() {
        let movieService =  this.$http.get(this.$store.state.commonService.api, { params: {
          type: 'movie',
          category: 'upcoming',
          language: this.$route.params.lang,
          api_key: this.$store.state.commonService.apiKey,
        }, headers: this.$store.state.commonService.headers });

        movieService
        .then((response) => this.movies = response.body.results)
      }

    },
    components: {},
    created() {
      this.getUpcoming();
    }
  }
</script>

<style lang="scss">
  @import '../scss/brand-variables';

  .wrap {
    padding-bottom: $space*3;
  }
</style>
