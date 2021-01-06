import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCocktail, faChalkboardTeacher, faBookmark, faBeer, faTimes, faGlassMartini, faTags, faListUl } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';

library.add(faCocktail, faChalkboardTeacher, faBookmark, faBeer, faTimes, faGlassMartini, faTags, faListUl);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
