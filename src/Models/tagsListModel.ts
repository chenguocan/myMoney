import createId from '@/lib/createId';

const storageNameKey="tagList"

const tagsListModel: tagsListItem={
    data:[],
    fetch(){
        this.data=JSON.parse(window.localStorage.getItem(storageNameKey)||'[]');
        return this.data;
    },
    create(name){
        //this.fetch()
        const newId=createId().toString();
        const names=this.data.map(item=> item.name);
        if(names.indexOf(name)>=0){
            return "duplicated";
        }
        this.data.push({id:newId,name:name});
        this.save();
        return "ok";
    },
    update(id,name){
        this.fetch();
        const oldId=this.data.map(item=>item.id);
        if(oldId.indexOf(id)>=0){
            const names=this.data.map(item=>item.name);
            if(names.indexOf(name)>=0){
                return "duplicated"
            }else{
                const tag=this.data.filter(item=>item.id===id)[0];
                tag.name=name;
                this.save();
                return "success";
            }
        }else {
            return "error";
        }
    },
    remove(id){
        let index=-1;
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].id===id){
                index=i;
            }
        }
        if(index!==-1){
            this.data.splice(index,1);
            this.save();
            return true;
        }else {
            return false;
        }
    },
    save(){
        window.localStorage.setItem(storageNameKey,JSON.stringify(this.data));
    }
}
export  default tagsListModel