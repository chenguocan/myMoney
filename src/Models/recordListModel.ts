import clone from "@/lib/clone.ts"
const storageNameKey="recordList"
const recordListModel={
    data:[] as RecordItem[],
    fetch(){
        return JSON.parse(window.localStorage.getItem(storageNameKey)||'[]') as RecordItem[];
    },
    create(record: RecordItem){
        record.createAt=new Date();
        const record2=clone(record);
        this.data.push(record2);
        this.save();
    },
    save(){
        window.localStorage.setItem(storageNameKey,JSON.stringify(this.data));
    }
}
export  default recordListModel