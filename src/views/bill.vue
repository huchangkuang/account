<template>
    <Layout>
        <StatisticType @update:type="type=$event" @update:date="date=$event"/>
        <ol class="bill-list" v-if="record.length!==0">
            <li v-for="i in getGroupRecord(date)" :key="i.title">
                <div class="head">
                    <div class="title">{{i.title}}</div>
                    <div class="sum">总计：{{i.total}}</div>
                </div>
                <ol>
                    <li v-for="(j,index) in i.items" :key="index">
                        <div class="detail">
                            <div class="classify">{{j.selectedIcon}}</div>
                            <div class="note">{{j.notes}}</div>
                        </div>
                        <div class="count" :class="j.type === '-' ?'green': 'red'">
                            {{j.type+j.output}}
                        </div>
                    </li>
                </ol>
            </li>
        </ol>
        <NoData v-else/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import store from "@/store/index2";
    import dayjs from "dayjs";

    @Component
    export default class Bill extends Vue {
        type = "-";
        date: "day"|"month"|"year" = "day";
        record = store.recordList;

        getGroupRecord(date: "day"|"month"|"year") {
            const newRecord = this.record.filter(item => item.type === this.type);
            const result = [{title: this.formatTime(date,newRecord[0].time), items: [newRecord[0]],total:0}];
            const titleList = [];
            for (let i = 1; i < newRecord.length; i++) {
                const current = newRecord[i];
                for (let j = 0; j < result.length; j++) {
                    if (titleList.indexOf(result[j].title) < 0) {
                        titleList.push(result[j].title);
                    }
                }
                const index = titleList.indexOf(this.formatTime(date,current.time));
                if (index < 0) {
                    result.push({title: this.formatTime(date,current.time), items: [current],total: 0});
                } else {
                    result[index].items.push(current);
                }
            }
            result.sort((a, b) => dayjs(b.title).valueOf() - dayjs(a.title).valueOf());
            for (let i =0;i<result.length;i++){
                const total = result[i].items.reduce((sum, i) =>sum + parseFloat(i.output), 0)
                this.type === "-" ? result[i].total = -total : result[i].total=total
            }
            return result;
        }
        formatTime(type: "day"|"month"|"year",time: string){
            const obj = {
                "day":dayjs(time).format("YYYY-MM-DD"),
                "month":dayjs(time).format("YYYY-MM"),
                "year":dayjs(time).format("YYYY")
            }
            return obj[type]
        }
    }
</script>

<style lang="scss" scoped>
    .bill-list {
        padding: 10px 20px;
        font-size: 18px;
        overflow: auto;

        .head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2px 0;

            .title {
                border-radius: 4px;
                background: rgba(78, 78, 78, 0.1);
                padding: 2px 6px;
            }
        }

        li {
            margin-bottom: 10px;

            > ol {
                > li {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-bottom: 1px solid #b5b5b5;
                    margin-bottom: 2px;

                    .count {
                        &.red {
                            color: #d40606;
                        }

                        &.green {
                            color: #0d930d;
                        }
                    }

                    .detail {
                        max-width: 80%;

                        .note {
                            font-size: 16px;
                            word-wrap: break-word;
                            color: #b5b5b5;
                        }
                    }
                }
            }
        ;
        }
    }
</style>