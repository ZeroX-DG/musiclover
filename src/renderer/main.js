import Vue from 'vue';
import 'reset-css/reset.css';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

import App from './App';
import router from './router';
import store from './store';

Vue.component('icon', Icon);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');
