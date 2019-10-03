import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import EleGallery from '../lib'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.component(EleGallery.name, EleGallery)

new Vue({
  render: h => h(App)
}).$mount('#app')
