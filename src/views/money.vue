<template>
    <Layout class-prefix="layout">
        <Type/>
        <Receipt/>
        <NumberPad/>
    </Layout>
</template>

<script lang="ts">
    import NumberPad from "@/components/numberPad.vue";
    import Type from "@/components/Type.vue";
    import Receipt from "@/components/Receipt.vue";

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