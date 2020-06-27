import tagStore from "@/store/tagStore";
import recordListStore from "@/store/recordListStore";

const store = {
    ...tagStore,
    ...recordListStore
}

export default store