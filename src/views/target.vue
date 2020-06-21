<template>
    <Layout class-prefix="target">
        <TouchCard/>
        <HowMuch class="how-much"/>
        <Budget class="budget"/>
    </Layout>
</template>

<script lang="ts">
    import TouchCard from "@/components/target/TouchCard.vue";
    import HowMuch from "@/components/target/HowMuch.vue";
    import Budget from "@/components/target/Budget.vue";
    export default {
        name: "Target",
        components: {Budget, HowMuch, TouchCard}
    }
</script>


<style lang="scss" scoped>
    .how-much {
        margin: -10px auto;
    }
    .budget {
        margin: 40px auto;
    }
</style>