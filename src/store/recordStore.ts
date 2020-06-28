import clone from "@/lib/clone";

const recordStore = {
    recordList: [] as ReceiptData[],
    fetchRecord(){
       this.recordList =  JSON.parse(window.localStorage.getItem("recordList") || "[]")
    },
    saveRecord(){
        window.localStorage.setItem("recordList",JSON.stringify(this.recordList))
    },
    createRecord(record: ReceiptData){
        const record2: ReceiptData = clone(record)
        this.recordList && this.recordList.push(record2)
        recordStore.saveRecord()
    }
}
recordStore.fetchRecord()
export default recordStore