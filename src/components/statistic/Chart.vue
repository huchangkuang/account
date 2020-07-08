<template>
    <div ref="container">
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop, Watch} from "vue-property-decorator";
    import echarts from "echarts"

    @Component
    export default class BasicLine extends Vue {
        @Prop(Object) readonly option!: object
        mounted(){
            const container = this.$refs.container as HTMLDivElement
            const width = document.documentElement.clientWidth
            container.style.width = `${width*0.9}px`
            container.style.height = `${width*0.6}px`
            const chart = echarts.init(container)
            chart.setOption(this.option)
        }
        @Watch("option", {deep:true})
        update(){
            const container = this.$refs.container as HTMLDivElement
            const width = document.documentElement.clientWidth
            container.style.width = `${width*0.9}px`
            container.style.height = `${width*0.6}px`
            const chart = echarts.init(container)
            chart.setOption(this.option)
        }
    }
</script>

<style lang="scss" scoped>

</style>