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
    create: (name: string) => "ok"|"duplicate";
    update: (id: string,name: string) => "success"|"duplicated"|"error";
    remove: (id: string) => boolean;
    save: () => void;
}

interface Window{
    tagList: Tag[];
}