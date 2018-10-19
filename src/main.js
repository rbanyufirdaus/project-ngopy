import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
const fb = require('./firebaseConfig.js')
import './assets/scss/app.scss'
import './assets/css/ready.css'
// import './assets/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

let app
fb.auth.onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

