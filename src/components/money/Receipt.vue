<template>
    <div class="container">
        <div class="top-bar">
            <div class="top-in"></div>
        </div>
        <div class="paper">
            <div class="amount">
                <div class="text">金额：</div>
                <div class="output">{{receiptData.output}}</div>
            </div>
            <div class="bar time">
                <div>日期：</div>
                <div class="time-content">{{receiptData.time}}</div>
            </div>
            <div class="bar kind">
                <div>分类：</div>
                <div class="kind-content">{{receiptData.selectedIcon}}</div>
            </div>
            <div class="bar notes">
                <div>备注：</div>
                <div class="note-content">{{receiptData.notes}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Receipt extends Vue {
        @Prop(Object) readonly receiptData!: object;

    }
</script>

<style lang="scss" scoped>
    .container {
        width: 90%;
        display: flex;
        align-items: center;
        flex-direction: column;

        .top-bar {
            background: rgb(233, 233, 233);
            height: 16px;
            border-radius: 8px;
            width: 100%;
            display: flex;
            justify-content: center;
            .top-in {
                width: 98%;
                height: 6px;
                background: rgb(218, 218, 218);
                margin-top: 7px;
                border-radius: 3px;
            }
        }

        .paper {
            border-top: 4px solid rgb(233, 233, 233);
            background: white;
            width: 95%;
            margin-top: -5px;
            min-height: 100px;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

            .amount {
                display: flex;
                justify-content: space-between;
                padding: 2px 10px;
                font-size: 36px;
                font-family: Consolas, monospace;
                border-bottom: 1px solid #e9e9e9;
            }
            .bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2px 10px;
            }

            .notes {
                .note-content {
                    max-width: 80%;
                    overflow-wrap: break-word;
                }
            }

            .time {
                padding: 2px 10px;
            }

            .kind {
                padding: 2px 10px;
            }
        }

    }
</style>