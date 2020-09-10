const storageNameKey="recordList"
const recordListModel={
    clone(data: RecordItem[] | RecordItem){
        return JSON.parse(JSON.stringify(data));
    },
    fetch(){
        return JSON.parse(window.localStorage.getItem(storageNameKey)||'[]') as RecordItem[];
    },
    save(data: RecordItem[]){
        window.localStorage.setItem(storageNameKey,JSON.stringify(data));
    }
}
export  default recordListModel