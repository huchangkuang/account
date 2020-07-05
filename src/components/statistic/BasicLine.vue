<template>
    <div ref="container">
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import echarts from "echarts"

    @Component
    export default class BasicLine extends Vue {
        @Prop(Object) readonly option!: object
        mounted(){
            console.log(this.option)
            const container = this.$refs.container as HTMLDivElement
            const chart = echarts.init(container)
            chart.setOption(this.option)
        }
    }
</script>

<style lang="scss" scoped>

</style>