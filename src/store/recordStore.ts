import recordListModel from '@/Models/recordListModel';

export default {
    recordList:recordListModel.fetch(),
    createRecord:(record: RecordItem)=>{
        recordListModel.create(record);
    },
}