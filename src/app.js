import Vue from 'vue'

Vue.component('app', {
  template: `
    <div id="app">
      <nav class="nav has-shadow">
        <div class="container">
          <a href="/">
            <img src="http://shorturl.at/uzCNZ" alt="Vue SPA">
          </a>
        </div>
      </nav> 
      <section class="main-section section"></section>
      <footer class="footer">
        <div class="content has-text-centered">
          Follow us on
          <a href="https://twitter.com/patrickxpin" target="_blank">Twitter</a>
        </div> 
      </footer>
    </div>
  `
})

const app = new Vue({
  render: h => h('app')
})

export { app }
