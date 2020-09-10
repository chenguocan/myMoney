const storageNameKey="tagList"
type Tag={
    id: string;
    name: string;
}
type tagsListItem={
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => "ok"|"duplicate";
    save: () => void;
}
const tagsListModel: tagsListItem={
    data:[],
    fetch(){
        this.data=JSON.parse(window.localStorage.getItem(storageNameKey)||'[]');
        return this.data;
    },
    create(name){
        //this.fetch();
        const names=this.data.map(item=> item.name);
        if(names.indexOf(name)>=0){
            return "duplicate";
        }
        this.data.push({id:name,name:name});
        this.save();
        return "ok";
    },
    save(){
        window.localStorage.setItem(storageNameKey,JSON.stringify(this.data));
    }
}
export  default tagsListModel