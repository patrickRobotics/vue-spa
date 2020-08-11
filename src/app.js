import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'hey there 3!'
  },
  template: '<div id="app">{{ hello }}</div>'
})

export { app }
