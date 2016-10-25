<template>
  <div class="col-sm-4">
    <div class="card mb-1">
      <router-link :to="{ name: 'movie', params: { lang: $store.state.commonService.lang, movieId: film.  id }}">
        <img
          class="card-img-top img-fluid"
          v-if="film.poster_path"
          v-bind:src="path + film.poster_path"
          v-bind:alt="film.title + ' poster'">
        <img
          class="card-img-top img-fluid"
          v-if="!film.poster_path"
          src="../../assets/no-image.gif"
          v-bind:alt="film.title + ' poster'">
      </router-link>
       <div class="card-block">
         <h4 class="card-title mb-0 text-truncate">
           <router-link :to="{ name: 'movie', params: { lang: $store.state.commonService.lang, movieId: film.id }}">
             {{ film.title }}
           </router-link>
         </h4>
         <ul class="list-genres list-inline card-text text-muted small mb-0">
           <li
            class="list-inline-item"
            v-for="(gerne, num) in genres[index]"
            v-if="num < 5">
            {{gerne}}
            <span v-if="num < genres[index].length -1">, </span>
          </li>
         </ul>

         <small class="tag  tag-default ">
           <i class="fa fa-star" aria-hidden="true"></i>
           {{film.vote_average}}
         </small>

         <p class="card-text mt-1">{{ film.overview | truncate(250, '...') }}</p>
         <p class="card-text">
           <span class="text-muted" v-translate>Release date:</span> {{ film.release_date | dateformat }} <i class="fa fa-calendar" aria-hidden="true"></i>
         </p>
         <router-link class="read-more" :to="{ name: 'movie', params: { lang: $store.state.commonService.lang, movieId: film.id }}"><span v-translate>Read more<span></router-link>

       </div>
     </div>
  </div>

</template>

<script>
  export default {
    props: ['film', 'path', 'genres', 'index'],
  }
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
}
</style>
