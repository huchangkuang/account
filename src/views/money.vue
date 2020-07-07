<template>
    <Layout class-prefix="layout">
        <Type @update:type="updateType"/>
        <Classify :icon-map="iconMap" @update:classify="receiptData.selectedIcon = $event" :type="receiptData.type"/>
        <Receipt :receipt-data="receiptData"/>
        <NumberPad :value.sync="receiptData.output"
                   @update:notes="receiptData.notes=$event"
                   :record="receiptData" @update:record="updateRecord"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import NumberPad from "@/components/money/numberPad.vue";
    import Receipt from "@/components/money/Receipt.vue";
    import Classify from "@/components/money/Classify.vue";
    import {Component} from "vue-property-decorator";
    import store from "@/store/index2";
    import dayjs from "dayjs"

    @Component({components: {Classify, Receipt, NumberPad}})
    export default class Money extends Vue {
        receiptData: ReceiptData = {
            selectedIcon:"餐饮",
            output : "0",
            notes:"",
            time: dayjs().format("YYYY-MM-DD"),
            type:"-"
        };
        iconMap = store.tagList
        now = new Date()
        updateRecord(event: ReceiptData){
            store.recordList.push(event)
            store.saveRecord()
        }
        updateType(event: string){
            this.receiptData.type = event
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
</style>
<style lang="scss" scoped>

</style>