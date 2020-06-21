<template>
    <div class="background">
        <div class="keeping">
            <div class="number">0</div>
            <div>已持续打卡</div>
        </div>
        <div class="touch">
            <Icon name="touchCard"/>
            <span>打卡</span>
        </div>
        <div class="sum">
            <div class="number">0</div>
            <div>记账总天数</div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class TouchCard extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .background {
        background: $theme_color;
        border-radius: 0 0 16px 16px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 94px;
        font-weight: bold;

        .touch {
            background: white;
            padding: 4px 20px;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon {
                font-size: 32px;
            }
            span {
                margin-left: 6px;
            }
        }
        .sum {

        }
        .number {
            text-align: center;
        }
    }
</style>