<template>
    <Layout class-prefix="layout">
        <Type/>
        <Classify class="tag"/>
        <Receipt class="receipt" :output="output"/>
        <NumberPad class="number-pad" :value.sync="output" />
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import NumberPad from "@/components/money/numberPad.vue";
    import Receipt from "@/components/money/Receipt.vue";
    import Classify from "@/components/money/Classify.vue";
    import {Component} from "vue-property-decorator";

    @Component({components:{Classify, Receipt, NumberPad}})
    export default class Money extends Vue{
        output = "0"
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
    .receipt {
        margin-top: -150px;
    }
    .tag {
        margin-top: -100px;
    }
</style>