<template>
    <div class="type">
        <div class="in-out">
            <div class="expense" :class="type === '-' && 'selected'" @click="changeType('-')">支出</div>
            <div class="income" :class="type === '+' && 'selected'" @click="changeType('+')">收入</div>
        </div>
        <div class="date">
            <div class="week" :class="date==='day' && 'selected'" @click="changeDate('day')">日</div>
            <div class="month" :class="date==='month' && 'selected'" @click="changeDate('month')">月</div>
            <div class="year" :class="date==='year' && 'selected'" @click="changeDate('year')">年</div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class StatisticType extends Vue {
        type = "-"
        date = "day"
        changeType(type: string){
            this.type = type
            this.$emit("update:type",this.type)
        }
        changeDate(date: string){
            this.date = date
            this.$emit("update:date",this.date)
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .type {
        display: flex;
        justify-content: space-around;
        background: $theme_color;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
        padding: 12px 0;
        width: 100%;

        > div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            > div {
                border: 1px solid $height_light;
                font-size: 16px;
                text-align: center;
                color: $height_light;
                border-radius: 4px;
                &.selected {
                    background: $height_light;
                    color: $theme_color;
                }
            }
        }
        .in-out {
            width: 30%;
            > div {
                padding: 2px 10px;
            }
        }
        .date {
            width: 50%;
            > div {
                padding: 2px 18px;
            }
        }
    }
</style>