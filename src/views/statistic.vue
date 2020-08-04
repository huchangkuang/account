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
    import {Component, Watch} from "vue-property-decorator";
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
        nMap = {day:30,month:12,year:5}
        get typeName(){
          return  this.type==="-"?"支出":"收入"
        }
        getGroupRecord=(type: string,date: "day"|"month"|"year")=>{
            type DataOrigin = {
                lineX: string[];
                lineY: number[];
                pieValue: { value: number; name: string }[];
                pieName: string[];
            }
            const newRecord = (clone(store.recordList) as ReceiptData[]).filter(i => i.type === type);
            const dataOrigin: DataOrigin = {
                lineX: [],
                lineY: [],
                pieValue: [],
                pieName: []
            };
            const {lineX, lineY, pieValue, pieName} = dataOrigin
            for (let i = 0; i < newRecord.length; i++) {
                const current = newRecord[i];
                if (lineX.indexOf(this.formatTime(date,current.time)) < 0) {
                    lineX.push(this.formatTime(date,current.time));//"MM-DD"
                }
                if (pieName.indexOf(current.selectedIcon) < 0) {
                    pieName.push(current.selectedIcon);
                }
            }
            //["06-15","07-07"]
            lineX.sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf());
            const maxDate = lineX[lineX.length-1]
            lineX.splice(0,lineX.length)
            this.fillDate(maxDate,this.nMap[date],lineX,date)
            lineX.sort((a, b) => dayjs(a).valueOf() - dayjs(b).valueOf());
            //["07-04","07-05","07-06","07-07"]

            for (let i = 0; i < lineX.length; i++) {
                const current = lineX[i];
                lineY.push(newRecord.reduce((sum, i) => this.formatTime(date,i.time) === this.formatTime(date,current) ?
                    sum + parseFloat(i.output) :
                    sum, 0));
            }
            for (let i = 0; i < pieName.length; i++) {
                const current = pieName[i];
                pieValue.push({
                    value: newRecord.reduce((sum, i) => i.selectedIcon === current ? sum + parseFloat(i.output) : sum, 0),
                    name: current
                });
            }
            return dataOrigin;
        }
        fillDate(maxDate: string,n: number,arr: string[],date: "day"|"month"|"year"){
            const map = {
                "day":"MM-DD",
                "month":"MM",
                "year":"YYYY"
            }
            const template = map[date]
            if (n>0){
                arr.push(maxDate)
                maxDate = dayjs(maxDate).subtract(1,date).format(template)
                n -= 1
                this.fillDate(maxDate,n,arr,date)
            }else {
                return arr
            }
        }
        formatTime(type: "day"|"month"|"year",time: string){
            const obj = {
                "day":dayjs(time).format("MM-DD"),
                "month":dayjs(time).format("MM"),
                "year":dayjs(time).format("YYYY")
            }
            return obj[type]
        }
        updateOptionData(){
            const {lineX, lineY, pieValue, pieName} = this.getGroupRecord(this.type,this.date)
            this.optionLine.xAxis.data = lineX
            this.optionLine.series[0].data = lineY
            this.optionPie.legend.data = pieName
            this.optionPie.series[0].data =pieValue
        }
        @Watch("type")
        updateLine(){
            this.updateOptionData()
        }
        @Watch("date")
        updatePie(){
            this.updateOptionData()
        }
        optionLine = {
            title: {
                text: "金额统计",
                left: 'center'
            },
            xAxis: {
                type: 'category',
                data: this.getGroupRecord(this.type,this.date).lineX,
                axisTick: {
                    alignWithLabel:true
                },
                axisLabel: {
                  rotate:45
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    margin:4,
                    length:3
                }
            },
            tooltip: {
                triggerOn: "click",
                formatter: '日期：{b}；金额：{c}'
            },
            series: [{
                data: this.getGroupRecord(this.type,this.date).lineY,
                type: 'line',
                markPoint: {
                    data: [{
                        type: "max"
                    }],
                }
            }]
        };
        optionPie = {
            title: {
                text: "分类占比(总)",
                subtext: '',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: this.getGroupRecord(this.type,this.date).pieName
            },
            series: [
                {
                    name: '支出',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: this.getGroupRecord(this.type,this.date).pieValue,
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label:{
                        formatter: '{b}\n{d}%'
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
