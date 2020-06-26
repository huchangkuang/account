import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from "@/components/Nav.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import Type from "@/components/money/Type.vue";
import PopWindow from "@/components/PopWindow.vue";
import WarnWindow from "@/components/WarnWindow.vue";

Vue.config.productionTip = false
Vue.component("Nav",Nav)
Vue.component("Layout",Layout)
Vue.component("Icon",Icon)
Vue.component("Type",Type)
Vue.component("PopWindow",PopWindow)
Vue.component("WarnWindow",WarnWindow)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
