<template>
    <Layout class-prefix="layout">
        <Type/>
        <Classify class="tag"/>
        <Receipt class="receipt"/>
        <NumberPad/>
    </Layout>
</template>

<script lang="ts">
    import NumberPad from "@/components/money/numberPad.vue";
    import Receipt from "@/components/money/Receipt.vue";
    import Classify from "@/components/money/Classify.vue";

    export default {
        name: "monet.vue",
        components: {Classify, Receipt, NumberPad},
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
</style>
<style lang="scss" scoped>
    .receipt {
        margin-left: auto;
        margin-right: auto;
    }
    .tag {
        margin: -100px auto;
    }
</style>