<template>
    <Layout class-prefix="layout">
        <Type/>
        <Receipt/>
        <NumberPad/>
    </Layout>
</template>

<script lang="ts">
    import NumberPad from "@/components/money/numberPad.vue";
    import Type from "@/components/money/Type.vue";
    import Receipt from "@/components/money/Receipt.vue";

    export default {
        name: "monet.vue",
        components: {Receipt, Type, NumberPad},
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

</style>