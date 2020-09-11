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
window.createTag=(id: string)=>{
  const tag = window.tagList.filter(item => item.id === id)[0];
  return tag;
}

window.removeTag=(id: string)=>{
  const status: boolean=tagsListModel.remove(id);
  if(status===true){
    window.alert("删除成功");
    return true;
  }else {
    window.alert("删除失败");
    return false;
  }
}
window.updateTag=(id: string,name: string)=>{
  tagsListModel.update(id,name);
}
window.createNewTag=(name: string)=>{
  if(name){
    const isOk=tagsListModel.create(name);
    if(isOk==="duplicated"){
      window.alert("标签名重复");
      return "duplicated";
    }else if(isOk==="ok"){
      window.alert("创建成功");
      return "ok";
    }else{
      return undefined;
    }
  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
