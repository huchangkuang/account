<template>
    <Layout class-prefix="layout">
        <Type/>
        <NumberPad/>
    </Layout>
</template>

<script lang="ts">
    import NumberPad from "@/components/numberPad.vue";
    import Type from "@/components/Type.vue";

    export default {
        name: "monet.vue",
        components: {Type, NumberPad},
    }
</script>

<style lang="scss">
    .layout-content {
        /*border: 1px solid blue;*/
    }
</style>
<style lang="scss" scoped>

</style>