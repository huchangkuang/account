<template>
    <div class="type">
        <div class="income-expense">支出</div>
        <div class="income-expense">收入</div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Type"
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .type {
        display: flex;
        justify-content: center;
        background: $theme_color;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
        padding: 12px 0;
        .income-expense {
            border: 1px solid $height_light;
            font-size: 16px;
            padding: 2px 23px;
            text-align: center;
            color: $height_light;
            &.selected {
                background: $height_light;
                color: $theme_color;
            }
        }
        :first-child {
            border-radius: 4px 0 0 4px ;
        }
        :last-child {
            border-radius: 0 4px 4px 0 ;
        }
    }
</style>