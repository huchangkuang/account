<template>
    <Layout>
        <StatisticType @update:type="type=$event" @update:date="date=$event"/>
        <ol class="bill-list" v-if="record.length!==0">
            <li v-for="item in newRecord" :key="item.id">
                <div class="detail">
                    <div class="classify">{{item.selectedIcon}}</div>
                    <div class="note">{{item.notes}}</div>
                </div>
                <div class="count" :class="item.type === '-' ?'green': 'red'">
                    {{item.type+item.output}}
                </div>
            </li>
        </ol>
        <NoData v-else/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue"
    import {Component, Watch} from "vue-property-decorator";
    import store from "@/store/index2";

    @Component
    export default class Bill extends Vue{
        type = "-"
        date = "day"
        record = store.recordList
        newRecord = this.record.filter(item => item.type===this.type)
        @Watch("type")
        change(){
            this.newRecord = this.record.filter(item => item.type===this.type)
        }
    }
</script>

<style lang="scss" scoped>
    .bill-list {
        padding: 10px 20px;
        font-size: 20px;
        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #b5b5b5;
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
</style>