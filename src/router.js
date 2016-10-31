import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// ===================== Pages Components ======================
import Hello from './components/Hello';
import Movielist from './components/Nowplaying';
import Item from './components/movieitem/Item';
import Person from './components/person/Person';

// ==================== Router registration ====================
export default new Router({
  mode: 'history',
  routes: [
    { name: 'notFound', path: '*', component: Hello },
    { name: 'home', path: '/', component: Hello },
    { name: 'movielists', path: '/category/:cat/lang/:lang/page/:pageNumber/', component: Movielist },
    { name: 'movie', path: '/lang/:lang/movie/:movieId', component: Item },
    { name: 'person', path: '/lang/:lang/person/:personId', component: Person }
  ]
});
