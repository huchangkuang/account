<template>
    <nav>
        <router-link to="/bill" class="item" active-class="selected">
            <Icon name="bill"/>
            明细
        </router-link>
        <router-link to="/statistic" class="item" active-class="selected">
            <Icon name="charts_line"/>
            统计
        </router-link>
        <router-link to="/" class="item" active-class="selected">
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
    nav {
        display: flex;
        background: #ffffff;
        padding: 5px 0;
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
                color: inherit;
                margin: 3px;
            }
        }
    }
</style>