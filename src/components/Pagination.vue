<template>
  <nav aria-label="Page navigation">
    <ul class="pagination mb-0 mt-0">
      <li class="page-item">
        <button class="page-link" v-show="current > 1" v-on:click="goToPage(prevCurrent)" aria-label="Previous">
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
          <span class="sr-only">Previous</span>
        </button>
      </li>
      <li v-show="current > 1" class="page-item"><button v-on:click="goToPage(first)" class="page-link">1</button></li>
      <li v-show="prevTen > 1" class="page-item"><button v-on:click="goToPage(prevTen)" class="page-link">{{prevTen}}</button></li>
      <li class="page-item disabled"><button class="page-link">{{current}}</button></li>
      <li class="page-item" v-show="nextTen < last"><button v-on:click="goToPage(nextTen)" class="page-link">{{nextTen}}</button></li>
      <li class="page-item" v-show="current < (last - 1)"><button v-on:click="goToPage(last)" class="page-link">{{last}}</button></li>
      <li class="page-item" v-show="current < last">
        <button class="page-link" v-on:click="goToPage(nextCurrent)" aria-label="Next">
          <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          <span class="sr-only">Next</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
  import myMovieMixin from '../mixins/vue-mixins';

  export default {
    props: ['totalPages'],
    mixins:[myMovieMixin],
    data () {
      return {
        first: 1,
        prevCurrent: '',
        prevTen: '',
        current: parseInt(this.$route.params.pageNumber),
        nextCurrent: '',
        nextTen: '',
        last: ''
      }
    },
    methods: {
      assignPages() {
        this.current = parseInt(this.$route.params.pageNumber);
        this.prevCurrent = parseInt(this.current) - 1;
        this.nextCurrent = parseInt(this.current) + 1;
        this.prevTen = parseInt(this.current) - 10;
        this.nextTen = parseInt(this.current) + 10;
        this.last = parseInt(this.totalPages);
      },
      goToPage(number){
        let router = this.$router.currentRoute;
        this.current = number;
        this.$router.push({name: router.name, params: {cat:this.$route.params.cat, lang: this.$route.params.lang, pageNumber: number }});
        this.scrollToTop( 500 );
      }
    },
    created () {
      this.assignPages();
    },
    watch: {
      '$route' (to, from) {
        this.assignPages();
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
