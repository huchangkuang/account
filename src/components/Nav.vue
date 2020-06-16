<template>
    <div id="nav">
        <router-link to="/label">标签</router-link>
        |
        <router-link to="/">记账</router-link>
        |
        <router-link to="/statistic">统计</router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Nav.vue"
    }
</script>

<style lang="scss" scoped>

</style>