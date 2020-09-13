import Vue from "vue"
import Component from 'vue-class-component'
@Component
export default class tagHelper extends Vue{
    createTag(){
        const name=window.prompt("请输入标签名");
        if(name){
            this.$store.commit("createTag",name);
        }else{
            window.alert("请输入正确标签");
        }
    }

}

