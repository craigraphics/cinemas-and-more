

;(function () {
  const moment =  require('moment');

  var vueDateFormat = {}

  vueDateFormat.install = function (Vue) {

    /**
     *
     * @param {String} text
     * @param {Number} length
     * @param {String} clamp
     *
     */

    Vue.filter('dateformat', function (date, format = 'MMM DD, YYYY') {
      return moment(date).format(format);
      // return '';
	  })
  }

  if (typeof exports == "object") {
    module.exports = vueDateFormat
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vueDateFormat })
  } else if (window.Vue) {
    window.VueTruncate = vueDateFormat
    Vue.use(vueDateFormat)
  }

})()
