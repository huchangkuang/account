<template>
    <nav>
        <router-link to="/bill" class="item" active-class="selected">
            <Icon name="bill"/>
            账单
        </router-link>
        <router-link to="/statistic" class="item" active-class="selected">
            <Icon name="charts_line"/>
            统计
        </router-link>
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="add"/>
            记账
        </router-link>
        <router-link to="/label" class="item" active-class="selected">
            <Icon name="tag"/>
            标签
        </router-link>
        <router-link to="/target" class="item" active-class="selected">
            <Icon name="target"/>
            目标
        </router-link>
    </nav>
</template>

<script lang="ts">
    export default {
        name: "Nav.vue"
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    nav {
        display: flex;
        background: #ffffff;
        padding: 5px 0;
        box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);
        > .item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            width: 20%;
            font-size: 12px;
            .icon {
                width: 32px;
                height: 32px;
                margin: 3px;
            }
            &.selected {
                color: $theme_color;
            }
        }
    }
</style>