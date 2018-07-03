import Vue from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store/index';

import '@/themes/element-ui';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
