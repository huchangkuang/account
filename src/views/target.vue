<template>
    <Layout class-prefix="target">
        <TouchCard/>
        <HowMuch class="how-much" :income="income" :expense="expense"/>
        <Budget class="budget" @update:appear="appear=$event" :expense="expense"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component} from "vue-property-decorator";
    import TouchCard from "@/components/target/TouchCard.vue";
    import HowMuch from "@/components/target/HowMuch.vue";
    import Budget from "@/components/target/Budget.vue";
    import store from "@/store/index2";

    @Component({components: {Budget, HowMuch, TouchCard}})
    export default class Target extends Vue{
        record = store.recordList
        income = this.record.filter(i=>i.type === "+").reduce((sum,i)=>{
            return sum + parseFloat(i.output)
        },0)
        expense = this.record.filter(i=>i.type === "-").reduce((sum,i)=>{
            return sum + parseFloat(i.output)
        },0)
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