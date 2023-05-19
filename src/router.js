import Vue from 'vue';
import Router from 'vue-router';
import SiteHome from './components/SiteHome.vue';
import SiteLogin from './components/SiteLogin.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: SiteHome },
    { path: '/login', component: SiteLogin }
  ]
});

new Vue({
  router,
}).$mount('#app');

// app.mount('#app')