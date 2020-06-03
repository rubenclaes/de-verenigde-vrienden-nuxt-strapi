import Vue from 'vue';

Vue.filter('euro', function(value) {
  return `€ ${parseFloat(value.toFixed(2)).toLocaleString('nl-BE')}`;
});
