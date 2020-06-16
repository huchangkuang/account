<template>
    <div id="notFound">当前页面不存在
        <router-link to="/">返回首页</router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: "notFound"
    }
</script>

<style lang="scss" scoped>
    #notFound{
        text-align: center;
    }
</style>