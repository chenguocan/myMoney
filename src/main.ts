import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import Notes from '@/components/Money/FormItem.vue';

Vue.config.productionTip = false
Vue.component("Nav",Nav)
Vue.component("Icon",Icon)
Vue.component("Layout",Layout);
Vue.component("Notes",Notes);
/*//record store
window.recordList=recordListModel.fetch();
window.createRecord=(record: RecordItem)=>{
  recordListModel.create(record);
};
//tags store
window.tagList=tagsListModel.fetch();
window.createTag=(id: string)=>{
  return window.tagList.filter(item => item.id === id)[0];
}

window.removeTag=(id: string)=>{
  const status: boolean=tagsListModel.remove(id);
  if(status){
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
}*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.onload=function (){
  setTimeout(function (){
    window.scrollTo(0,9999);
  },0)
}
