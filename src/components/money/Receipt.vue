<template>
    <div class="top">
        <div class="paper">
            <div class="amount">
                <div class="text">金额：</div>
                <div class="output">￥0</div>
            </div>
            <div class="time">日期：
                <div class="time-content"></div>
            </div>
            <div class="kind">分类：
                <div class="kind-content"></div>
            </div>
            <div class="notes">备注：
                <div class="note-content"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class Receipt extends Vue {

    }
</script>

<style lang="scss" scoped>
    .top {
        width: 90%;
        background: rgb(233, 233, 233);
        height: 16px;
        border-radius: 8px;
        position: relative;

        &::before {
            content: "";
            /*border: 1px solid red;*/
            width: 98%;
            height: 6px;
            background: rgb(218, 218, 218);
            position: absolute;
            left: 50%;
            transform: translate(-50%, 7px);
            border-radius: 3px;
        }

        .paper {
            border-top: 4px solid rgb(233, 233, 233);
            background: white;
            width: 95%;
            position: absolute;
            top: 11px;
            left: 50%;
            transform: translateX(-50%);
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

            .notes {
                padding: 2px 10px;

                input {
                    border: none;
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