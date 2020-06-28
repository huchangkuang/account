import idCreator from "@/lib/createId";

const iconMap: Tag[] = [
    {
        id: 0,
        icon: "food",
        name: "餐饮"
    },
    {
        id: 1,
        icon: "shop",
        name: "购物"
    },
    {
        id: 2,
        icon: "clothes",
        name: "服饰"
    }, {
        id: 3,
        icon: "bus",
        name: "交通"
    }, {
        id: 4,
        icon: "entertainment",
        name: "娱乐"
    }, {
        id: 5,
        icon: "handshake",
        name: "社交"
    }, {
        id: 6,
        icon: "chat",
        name: "通讯"
    }, {
        id: 7,
        icon: "medical",
        name: "医疗"
    }
];


const tagStore = {
    tagList: [] as Tag[],
    fetch() {
        this.tagList = JSON.parse(window.localStorage.getItem("iconMap") || JSON.stringify(iconMap));
        return this.tagList;
    },
    findTag(id: string) {
        return this.tagList.filter(t => t.id.toString() === id)[0];
    },
    deleteTag(id: string) {
        let index = -1;
        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === parseInt(id)) {
                index = i;
                break;
            }
        }
        this.tagList.splice(index, 1);
    },
    createTag(icon: string,name: string){
        for (let i=0 ;i < this.tagList.length;i++){
            if (this.tagList[i].name === name){
                return "duplicated"
            }
        }
        this.tagList.push({
            id:idCreator(),
            icon:icon,
            name:name
        })
    }
};
tagStore.fetch();
export default tagStore;