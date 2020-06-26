<template>
    <Layout class-prefix="layout">
        <Type/>
        <Classify :icon-map="iconMap" @update:classify="receiptData.selectedIcon = $event"/>
        <Receipt :receipt-data="receiptData"/>
        <NumberPad :value.sync="receiptData.output" @update:notes="receiptData.notes=$event"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import NumberPad from "@/components/money/numberPad.vue";
    import Receipt from "@/components/money/Receipt.vue";
    import Classify from "@/components/money/Classify.vue";
    import {Component} from "vue-property-decorator";

    @Component({components: {Classify, Receipt, NumberPad}})
    export default class Money extends Vue {
        receiptData = {
            selectedIcon:"餐饮",
            output : "0",
            notes:"",
            time:"2020-6-24"
        };
        iconMap = {
            food: "餐饮",
            shop: "购物",
            clothes: "服饰",
            bus: "交通",
            entertainment: "娱乐",
            handshake: "社交",
            chat: "通讯",
            medical: "医疗"
        };
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