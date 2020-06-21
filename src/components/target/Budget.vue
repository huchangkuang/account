<template>
    <div class="container">
        <div class="budget-header">
            <div class="text">06月总预算</div>
            <button class="setBudget">+设置预算</button>
        </div>
        <div class="budget-main">
            <div class="pie"></div>
            <ul class="description">
                <li>
                    <span class="budget-description">剩余预算</span>
                    <span class="number">0.00</span>
                </li>
                <li class="line"></li>
                <li>
                    <span class="budget-description">本月预算</span>
                    <span class="number">0.00</span>
                </li>
                <li>
                    <span class="budget-description">本月支出</span>
                    <span class="number">0.00</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class Budget extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .container {
        font-weight: bold;
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
                padding:2px 4px;
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
                background: #eaeaea;
                position: relative;
                &::before {
                    content: "";
                    width: 64px;
                    height: 64px;
                    background: white;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    border-radius: 50%;
                }
                &::after {
                    content: "剩余0%";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
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