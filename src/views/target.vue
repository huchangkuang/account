<template>
    <Layout class-prefix="target">
        <TouchCard/>
        <HowMuch class="how-much"/>
        <Budget class="budget" @update:appear="appear=$event"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue"
    import  {Component} from "vue-property-decorator";
    import TouchCard from "@/components/target/TouchCard.vue";
    import HowMuch from "@/components/target/HowMuch.vue";
    import Budget from "@/components/target/Budget.vue";

    @Component({components: {Budget, HowMuch, TouchCard}})
    export default class Target extends Vue{

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