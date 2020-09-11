type RecordItem = {
    amount: number;
    type: string;
    notes: string;
    tags: string[];
    createAt?: Date;
}
type Tag={
    id: string;
    name: string;
}
type tagsListItem={
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => "ok"|"duplicated";
    update: (id: string,name: string) => "success"|"duplicated"|"error";
    remove: (id: string) => boolean;
    save: () => void;
}

interface Window{
    tagList: Tag[];
    removeTag: (id: string) => boolean;
    createTag: (id: string) => Tag;
    updateTag: (id: string,name: string) => void;
    createNewTag: (name: string) => "ok"|"duplicated"|undefined;
}