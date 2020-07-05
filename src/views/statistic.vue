<template>
    <Layout class-prefix="statistic">
        <StatisticType @update:type="type=$event" @update:date="date=$event"/>
        <div class="line">
            <div >{{type === "-" ? "支出" : "收入"}}统计</div>
            <BasicLine :option="option"/>
            <NoData />
        </div>
        <div class="bar">
            <div >{{type === "-" ? "支出" : "收入"}}排行</div>
            <NoData />
        </div>
        <div class="pie">
            <div >分类占比</div>
            <NoData />
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import store from "@/store/index2";
    import BasicLine from "@/components/statistic/BasicLine.vue";
    @Component({
        components: {BasicLine}
    })
    export default class Statistic extends Vue {
        record = store.recordList
        type = "-"
        date = "day"
        option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
    }
</script>

<style lang="scss" scoped>
    ::v-deep .statistic-content {
        display: flex;
        flex-direction: column;
        .line {
            flex-grow: 1;
            border-bottom: 1px solid #b5b5b5;
            padding: 10px;
        }
        .bar {
            flex-grow: 1;
            border-bottom: 1px solid #b5b5b5;
            padding: 10px;
        }
        .pie {
            flex-grow: 1;
            padding: 10px;
        }
    }

</style>