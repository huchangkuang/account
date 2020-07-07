<template>
    <Layout class-prefix="statistic">
        <StatisticType @update:type="type=$event" @update:date="date=$event"/>
        <div class="chart">
            <div class="line">
                <div>{{type === "-" ? "支出" : "收入"}}统计</div>
                <Chart :option="optionLine" v-if="true" class="chart"/>
                <NoData v-else/>
            </div>
            <div class="bar">
                <div>{{type === "-" ? "支出" : "收入"}}排行</div>
                <Chart :option="optionBar" v-if="true" class="chart"/>
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

    @Component({
        components: {Chart}
    })
    export default class Statistic extends Vue {
        record = store.recordList;
        type = "-";
        date = "day";

        optionLine = {
            xAxis: {
                type: 'category',
                data: this.xData(this.date),
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
        optionBar = {
            title: {
                text: '世界人口总量',
                subtext: '数据来自网络'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2011年', '2012年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };
        optionPie = {
            title: {
                text: '某站点用户访问来源',
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
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ],
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