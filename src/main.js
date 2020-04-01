import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import App from './App.vue';
import store from './store';
import VueSwal from 'vue-swal';
import LoadScript from 'vue-plugin-load-script';
 
Vue.use(LoadScript);
Vue.use(VueSwal);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["field","block","category","xml","mutation","value","sep"];


new Vue({
    store,
    render: h => h(App),
}).$mount("#app");

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
