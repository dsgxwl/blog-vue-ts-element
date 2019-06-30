import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import '@/components' // 自动注册全局组件
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
