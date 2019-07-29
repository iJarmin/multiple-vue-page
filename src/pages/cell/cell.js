import Vue from 'Vue'
import cell from './cell.vue'
import store from '../../store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(cell)
})
