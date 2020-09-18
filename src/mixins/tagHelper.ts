import Vue from "vue"
import Component from 'vue-class-component'
import {MessageBox} from 'mint-ui';
type addTagItem={
    value: string;
    action: string;
}
@Component
export default class tagHelper extends Vue{
    async createTag(){
        const name=await MessageBox.prompt('请输入标签名').then((data: addTagItem)=>{
            const name= data.value;
            return name;
        }).catch((error: string)=>{
            return error;
        });
        if(name!='cancel' && name!==null && name!==''){
            this.$store.commit("createTag",name);
        }else if(name==='cancel'){
            return;
        }else if(name === null && name==='' ){
            return MessageBox.alert("请输入正确标签");
        }
    }
}

