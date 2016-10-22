import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// ===================== Pages Components ======================
import Hello from './components/Hello';
import Movielist from './components/Nowplaying';
import Item from './components/movieitem/Item';

// ==================== Router registration ====================
export default new Router({
  mode: 'hash',
  routes: [
    { name: 'home', path: '/', component: Hello },
    { name: 'movielists', path: '/category/:cat/lang/:lang/page/:pageNumber/', component: Movielist },
    { name: 'id', path: '/id/:movieId', component: Item }
  ]
});
