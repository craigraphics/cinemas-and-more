;(function () {

  var vueCurrency = {}

  vueCurrency.install = function (Vue) {

    /**
     *
     * @param {String} text
     * @param {Number} length
     * @param {String} clamp
     *
     */

    Vue.filter('currency', function (val) {

      function ins1000Sep ( val ) {
        val = val.split('.');
        val[0] = val[0].split('').reverse().join('');
        val[0] = val[0].replace(/(\d{3})/g,'$1,');
        val[0] = val[0].split('').reverse().join('');
        val[0] = val[0].indexOf(',')==0?val[0].substring(1):val[0];
        return val.join('.');
      }

      function formatNum (val) {
        val = Math.round( val * 100 ) / 100;
        val = ( '' + val ).indexOf('.') >- 1 ? val + '00' : val + '.00';
        var dec = val.indexOf('.');
        return dec === val.length - 3 || dec === 0 ? val : val.substring( 0, dec + 3 );
      }
      return ins1000Sep(formatNum(val));
	  })
  }

  if (typeof exports == "object") {
    module.exports = vueCurrency
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vueCurrency })
  } else if (window.Vue) {
    window.VueTruncate = vueCurrency
    Vue.use(vueCurrency)
  }

})()
