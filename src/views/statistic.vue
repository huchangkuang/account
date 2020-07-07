<template>
    <Layout class-prefix="statistic">
        <StatisticType @update:type="type=$event" @update:date="date=$event"/>
        <div class="chart">
            <div class="line">
                <div>{{type === "-" ? "支出" : "收入"}}统计</div>
                <Chart :option="optionLine" v-if="true" class="chart"/>
                <NoData v-else/>
            </div>
            <div class="pie">
                <div>分类占比</div>
                <Chart :option="optionPie" v-if="true" class="chart"/>
                <NoData v-else/>
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
        optionLine = {
            title: {
                text: '支出统计',
                subtext: '纯属虚构',
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: [1,2,3,4,5],
                axisTick: {
                    interval: 1
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
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
        getGroupRecord(){
            type DataOrigin = {
                lineX: string[];
                lineY: number[];
                pieValue: { value: number; name: string }[];
                pieName: string[];
            }
            console.log("type")
            console.log(this.type)
            const newRecord = (clone(store.recordList) as ReceiptData[]).filter(i => i.type === this.type);
            console.log(store.recordList);
            console.log("newRecord");
            console.log(newRecord);
            const dataOrigin: DataOrigin = {
                lineX: [],
                lineY: [],
                pieValue: [],
                pieName: []
            };
            for (let i = 0; i < newRecord.length; i++) {
                const current = newRecord[i];
                if (dataOrigin.lineX.indexOf(current.time) < 0) {
                    dataOrigin.lineX.push(current.time);
                }
                if (dataOrigin.pieName.indexOf(current.selectedIcon) < 0) {
                    dataOrigin.pieName.push(current.selectedIcon);
                    console.log(dataOrigin.pieName);
                    console.log(current.selectedIcon);
                }
            }
            dataOrigin.lineX.sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf());
            for (let i = 0; i < dataOrigin.lineX.length; i++) {
                const current = dataOrigin.lineX[i];
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

        getMonthDay(year: number, month: number) {
            return new Date(year, month + 1, 0).getDate();
        }

        xData(date: string) {
            const list = [];
            if (date === "day") {
                for (let i = 0; i < this.getMonthDay(2020, 7); i++) {
                    list.push(i + 1);
                }
            } else if (date === "month") {
                for (let i = 0; i < 12; i++) {
                    list.push(i + 1);
                }
            }
            return list;
        }
    }
</script>

<style lang="scss" scoped>
    ::v-deep .statistic-content {
        display: flex;
        flex-direction: column;

        .chart {
            flex-grow: 1;
            overflow: auto;

            .chart {
                margin-left: auto;
                margin-right: auto;
            }

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
    }

</style>