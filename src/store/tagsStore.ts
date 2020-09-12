import tagsListModel from '@/Models/tagsListModel';

export default {
    tagList: tagsListModel.fetch(),
    createTag (id: string) {
        return this.tagList.filter(item => item.id === id)[0];
    },
    removeTag: (id: string) => {
        const status: boolean = tagsListModel.remove(id);
        if (status) {
            window.alert('删除成功');
            return true;
        } else {
            window.alert('删除失败');
            return false;
        }
    },
    updateTag: (id: string, name: string) => {
        tagsListModel.update(id, name);
    },
    createNewTag: (name: string) => {
        if (name) {
            const isOk = tagsListModel.create(name);
            if (isOk === 'duplicated') {
                window.alert('标签名重复');
                return 'duplicated';
            } else if (isOk === 'ok') {
                window.alert('创建成功');
                return 'ok';
            } else {
                return undefined;
            }
        }
    }
};