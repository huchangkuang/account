<template>
    <div class="container">
        <div class="budget-header">
            <div class="text">06月总预算</div>
            <button class="setBudget" @click="setBudget">+设置预算</button>
        </div>
        <div class="budget-main">
            <div class="pie"
                 :style="{background: `conic-gradient(#f3c623 ${deg}deg,#eaeaea ${deg}deg 360deg)`}">
                <div class="remain">剩余{{ budget !== 0 ? Math.round((percent)*100) : 0}}%</div>
            </div>
            <ul class="description">
                <li>
                    <span class="budget-description">剩余预算</span>
                    <span class="number">{{remain}}</span>
                </li>
                <li class="line"></li>
                <li>
                    <span class="budget-description">本月预算</span>
                    <span class="number">{{budget}}</span>
                </li>
                <li>
                    <span class="budget-description">本月支出</span>
                    <span class="number">{{expense}}</span>
                </li>
            </ul>
        </div>
        <PopWindow :appear.sync="appear" @update:value="updateBudget" :span="'每月总预算'" :placeholder="'请输入预算金额'"/>
        <WarnWindow :show.sync="show" :span="span"/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";


    @Component
    export default class Budget extends Vue {
        appear = "none";
        expense = 0;
        budget = JSON.parse(window.localStorage.getItem("budget") || "0");
        remain = this.budget - this.expense < 0 ? 0 : this.budget - this.expense || 0;
        percent = this.remain / this.budget || 0;
        deg = this.percent * 360 || 0;
        show = "none";
        span = "";
        spanNotes = ["0预算，你要修仙？", "负预算是闹哪样？", "输入数字呀！"];

        setBudget() {
            this.appear = "block";
        }

        saveBudget(budget: number) {
            window.localStorage.setItem("budget", budget.toString());
        }

        updateBudget(event: string) {
            const number = parseFloat(event);
            if (number > 0) {
                this.budget = number;
                this.remain = this.budget - this.expense < 0 ? 0 : this.budget - this.expense;
                this.percent = this.remain / this.budget;
                this.deg = this.percent * 360;
                this.saveBudget(this.budget);
            } else if (number === 0) {
                this.span = this.spanNotes[0];
                this.show = "block";
            } else if (number < 0) {
                this.span = this.spanNotes[1];
                this.show = "block";
            } else {
                this.span = this.spanNotes[2];
                this.show = "block";
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .container {
        /*font-weight: bold;*/
        background: white;
        min-height: 160px;
        width: 88%;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
        border-radius: 10px;

        .budget-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 25px;

            .setBudget {
                background: $theme_color;
                border: none;
                border-radius: 4px;
                padding: 2px 4px;
                font-weight: bold;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
            }

            .text {
                margin-left: 10px;
            }
        }

        .budget-main {
            display: flex;
            justify-content: space-between;
            padding: 5px 25px;

            .pie {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                position: relative;

                .remain {
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                &::before {
                    content: "";
                    width: 64px;
                    height: 64px;
                    background: white;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 50%;
                }

                &::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                }
            }

            .description {
                display: flex;
                justify-content: space-between;
                flex-direction: column;

                .line {
                    width: 160px;
                    height: 1px;
                    background: #e3e3e3;
                    right: 0;
                }

                li {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>