<template>
    <Layout class-prefix="statistic">
        <StatisticType @update:type="type=$event" @update:date="date=$event"/>
        <div class="chart">
            <div class="line">
                <div class="nodata" v-if="record.length===0">
                    <div>{{type === "-" ? "支出" : "收入"}}统计</div>
                    <NoData />
                </div>
                <Chart :option="optionLine" v-else/>
            </div>
            <div class="pie">
                <div class="nodata" v-if="record.length===0">
                    <div>分类占比</div>
                    <NoData/>
                </div>
                <Chart :option="optionPie" v-else/>

            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import store from "@/store/index2";
    import Chart from "@/components/statistic/Chart.vue";
    import dayjs from "dayjs";
    import clone from "@/lib/clone";

    @Component({
        components: {Chart}
    })
    export default class Statistic extends Vue {
        type = "-";
        date: "day"|"month"|"year" = "day";
        record = store.recordList
        getGroupRecord=()=>{
            type DataOrigin = {
                lineX: string[];
                lineY: number[];
                pieValue: { value: number; name: string }[];
                pieName: string[];
            }
            const newRecord = (clone(store.recordList) as ReceiptData[]).filter(i => i.type === this.type);
            const dataOrigin: DataOrigin = {
                lineX: [],
                lineY: [],
                pieValue: [],
                pieName: []
            };
            const template: string[] = []
            for (let i = 0; i < newRecord.length; i++) {
                const current = newRecord[i];
                if (dataOrigin.lineX.indexOf(current.time) < 0) {
                    const formatTime = dayjs(current.time).format("MM-DD")
                    template.push(current.time)
                    dataOrigin.lineX.push(formatTime);
                }
                if (dataOrigin.pieName.indexOf(current.selectedIcon) < 0) {
                    dataOrigin.pieName.push(current.selectedIcon);
                }
            }
            dataOrigin.lineX.sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf());
            for (let i = 0; i < template.length; i++) {
                const current = template[i];
                dataOrigin.lineY.push(newRecord.reduce((sum, i) => i.time === current ? sum + parseFloat(i.output) : sum, 0));
            }
            for (let i = 0; i < dataOrigin.pieName.length; i++) {
                const current = dataOrigin.pieName[i];
                dataOrigin.pieValue.push({
                    value: newRecord.reduce((sum, i) => i.selectedIcon === current ? sum + parseFloat(i.output) : sum, 0),
                    name: current
                });
            }
            console.log(dataOrigin);
            return dataOrigin;
        }
        optionLine = {
            title: {
                text: '支出统计',
                subtext: '纯属虚构',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: this.getGroupRecord().lineX,

            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: this.getGroupRecord().lineY,
                type: 'line'
            }]
        };
        optionPie = {
            title: {
                text: '支出分类占比(总)',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: this.getGroupRecord().pieName
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: this.getGroupRecord().pieValue,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
    }
</script>

<style lang="scss" scoped>
    ::v-deep .statistic-content {
        display: flex;
        flex-direction: column;
        .chart {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            overflow: auto;
            .nodata {
                display:flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }

            .line {
                flex-grow: 1;
                border-bottom: 1px solid #b5b5b5;
                padding: 10px;
                display:flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }

            .pie {
                flex-grow: 1;
                padding: 10px;
                display:flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }
        }
    }

</style>