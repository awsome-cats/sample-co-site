import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'

import 'bootstrap/dist/css/bootstrap.min.css'
// transitionのmoduleのimport
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
})

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
