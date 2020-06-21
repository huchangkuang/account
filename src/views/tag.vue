<template>
<Layout>
    <div class="text">分类设置</div>
    <Type/>
</Layout>
</template>

<script lang="ts">

    export default {
        name: "tag",
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .text {
        text-align: center;
        background: $theme_color;
        font-weight: bold;
        font-size: 18px;
        padding-top: 8px;
    }
</style>