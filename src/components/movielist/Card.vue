<template>

  <div class="col-md-6">
    <div class="card">
      <router-link :to="{ name: 'movie', params: { lang: $store.state.commonService.lang, movieId: film.  id }}">
        <img v-if="film.poster_path" v-bind:src="path + film.poster_path" v-bind:alt="film.title + ' poster'">
        <div v-if="!film.poster_path" class="no_image_holder"></div>
      </router-link>

      <div class="caption ">

        <router-link :to="{ name: 'movie', params: { lang: $store.state.commonService.lang, movieId: film.id }}">
          <h4>{{ film.title | truncate(28, '...') }}</h4>
        </router-link>

        <section class="top-text">
          <ul class="list-genres pull-left">
            <li v-for="(gerne, num) in genres[index]"> {{gerne}}<span v-if="num < genres[index].length -1">, </span></li>
          </ul>

          <p class="pull-right rating"> {{film.vote_average}} / 10 <i class="fa fa-star" aria-hidden="true"></i> </p>
        </section>

        <p class="date"> <span v-translate>Release date:</span> <strong>{{ film.release_date | dateformat }}</strong> <i class="fa fa-calendar" aria-hidden="true"></i></p>
        <p class="overview">{{ film.overview | truncate(250, '...') }}</p>
      </div>
      <router-link class="read-more" :to="{ name: 'movie', params: { lang: $store.state.commonService.lang, movieId: film.id }}"><span v-translate>Read more<span></router-link>
    </div>
  </div>

</template>

<script>
  export default {
    props: ['film', 'path', 'genres', 'index'],
  }
</script>

<style lang="scss" scoped>
@import '../../scss/variables';
@import '../../scss/brand-variables';

.card {
  margin-bottom: $space;
  box-shadow: 0px 0px 15px;
  box-sizing:border-box;
  position: relative;
  background-color: $white;
  img {
    margin-right: 13px;
    width: 100%;
    height: auto;
    overflow: hidden;
  }
}

.caption {
  padding:0 $space/3 0;
  a:not(.read-more) {
    &:hover {
      text-decoration: none;
    }
  }
  h4 {
    padding-top: ($space/3);
    margin-bottom: ($space/3);
  }
  .top-text {
    display: none;
    overflow: hidden;
    p {
      margin: 0
    }
  }
}

.no_image_holder {
  float: left;
  margin-right: 13px;
  width: 185px;
  height:  $card-height;
  line-height:  $card-height;
  font-size: 92px;
  display: inline-block;
  font-family: FontAwesome;
  text-align: center;
  background-color: #dbdbdb;
  color: #b5b5b5;
  box-sizing: border-box;
  &:before {
    content: "\f1c5";
  }
}

.list-genres {
  margin:0;
  list-style: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0;
    padding: 0;
    margin-right: 3px;
  }
}

.rating {
  i {
    color: $black;
  }
}

.overview {
  display: none;
  margin-top: $space/3;
  font-size: 1.5rem;
  line-height: 1.4
}

.date {
  padding-bottom: 15px;
}

.read-more {
  display: none;
  position: absolute;
  bottom: $space/3;
  right: $space/3;
}

@media (min-width: $screen-sm-min) {
  .card {
      height: $card-height;

    img {
      float: left;
      width: 185px;
        height: $card-height;
    }
  }
  .overview, .read-more, .caption .top-text {
    display: block;
  }

  .date {
    padding-bottom: 0;
  }
}


</style>
