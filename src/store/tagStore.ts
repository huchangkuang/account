import idCreator from "@/lib/createId";

const iconMap: Tag[] = [
    {
        id: idCreator(),
        icon: "food",
        name: "餐饮",
        type: "-"
    },
    {
        id: idCreator(),
        icon: "shop",
        name: "购物",
        type: "-"
    },
    {
        id: idCreator(),
        icon: "clothes",
        name: "服饰",
        type: "-"
    }, {
        id: idCreator(),
        icon: "bus",
        name: "交通",
        type: "-"
    }, {
        id: idCreator(),
        icon: "entertainment",
        name: "娱乐",
        type: "-"
    }, {
        id: idCreator(),
        icon: "handshake",
        name: "社交",
        type: "-"
    }, {
        id: idCreator(),
        icon: "chat",
        name: "通讯",
        type: "-"
    }, {
        id: idCreator(),
        icon: "medical",
        name: "医疗",
        type: "-"
    },{
        id: idCreator(),
        icon: "part_time_job",
        name: "兼职",
        type: "+"
    },{
        id: idCreator(),
        icon: "salary",
        name: "工资",
        type: "+"
    },{
        id: idCreator(),
        icon: "bonus",
        name: "奖金",
        type: "+"
    },{
        id: idCreator(),
        icon: "lottery",
        name: "彩票",
        type: "+"
    }
];


const tagStore = {
    tagList: [] as Tag[],
    fetchTag() {
        this.tagList = JSON.parse(window.localStorage.getItem("iconMap") || JSON.stringify(iconMap));
        return this.tagList;
    },
    findTag(id: string) {
        return this.tagList.filter(t => t.id.toString() === id)[0];
    },
    saveTag(){
        window.localStorage.setItem("iconMap",JSON.stringify(this.tagList))
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
        this.saveTag()
    },
    createTag(icon: string,name: string,type: string){
        for (let i=0 ;i < this.tagList.length;i++){
            if (this.tagList[i].name === name){
                return "duplicated"
            }
        }
        this.tagList.push({
            id:idCreator(),
            icon:icon,
            name:name,
            type:type
        })
        this.saveTag()

    }
};
tagStore.fetchTag();
export default tagStore;