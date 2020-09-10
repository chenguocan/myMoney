import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import Notes from "@/components/Money/FormItem.vue"
import recordListModel from '@/Models/recordListModel';
import tagsListModel from '@/Models/tagsListModel';
Vue.config.productionTip = false
Vue.component("Nav",Nav)
Vue.component("Icon",Icon)
Vue.component("Layout",Layout);
Vue.component("Notes",Notes);

window.tagList=tagsListModel.fetch();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
