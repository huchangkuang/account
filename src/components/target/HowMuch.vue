<template>
    <div class="container">
        <div class="time">
            <div class="year">2020年</div>
            <div class="mouth">06月</div>
        </div>
        <div class="line"></div>
        <ul class="message">
            <li>
                <div class="description">收入</div>
                <div class="number">{{income}}</div>
            </li>
            <li>
                <div class="description">支出</div>
                <div class="number">{{expense}}</div>
            </li>
            <li>
                <div class="description">结余</div>
                <div class="number">{{income-expense}}</div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class HowMuch extends Vue {
        @Prop(Number) readonly income!: number
        @Prop(Number) readonly expense!: number
    }
</script>

<style lang="scss" scoped>
    .container {
        background: #ffffff;
        width: 88%;
        min-height: 64px;
        border-radius: 10px;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-weight: bold;
        padding: 0 20px;
        .time {
            text-align: center;
        }
        .line {
            width: 1px;
            background: #c4c4c4;
            height: 32px;
            margin-left: 10px;
        }
        .message {
            flex-grow: 1;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>