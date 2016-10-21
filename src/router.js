import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// ===================== Pages Components ======================
import Hello from './components/Hello';
import Movielist from './components/movielist/Movie';
import Item from './components/Item';

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    { name: 'home', path: '/', component: Hello },
    { name: 'movies', path: '/Movies/lang/:lang/page/:pageNumber/', component: Movielist },
    { name: 'id', path: '/id/:movieId', component: Item }
  ]
});
