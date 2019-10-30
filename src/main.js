import Vue from 'vue'
import App from './App.vue'
import routerList from "./router";
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import VueParticles from 'vue-particles'  

Vue.use(VueParticles);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.config.productionTip = false
const router = new VueRouter({
  mode: "hash",
  routes: routerList
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')