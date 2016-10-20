// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// =============== Base libraries integration ==================
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueTranslate from 'vue-translate-plugin'
import vueTruncate from 'vue-truncate-filter'
import vueCurrency from './filters/vue-currency-filter'
import vueDateFormat from './filters/vue-dateformat-filter'

Vue.use(VueResource)
Vue.use(VueTranslate)
Vue.use(vueTruncate)
Vue.use(vueCurrency)
Vue.use(vueDateFormat)

import store from './store'
import router from './router'


// ===== Bootstrap components integration (JQuery needed) ======
window.$ = window.jQuery = require('jquery')
require('bootstrap-sass')

// ======================= Base Component ======================
import App from './App'

// ======================== Vue Instance =======================
/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  http: {
    root: '/root'
  },
  render: h => h(App)
})
