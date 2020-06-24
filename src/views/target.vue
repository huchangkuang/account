<template>
    <Layout class-prefix="target">
        <TouchCard/>
        <HowMuch class="how-much"/>
        <Budget class="budget" @update:appear="appear=$event"/>
        <PopSetBudget/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue"
    import  {Component} from "vue-property-decorator";
    import TouchCard from "@/components/target/TouchCard.vue";
    import HowMuch from "@/components/target/HowMuch.vue";
    import Budget from "@/components/target/Budget.vue";
    import PopSetBudget from "@/components/target/PopSetBudget.vue";

    @Component({components: {PopSetBudget, Budget, HowMuch, TouchCard}})
    export default class Target extends Vue{
        appear = "none"
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