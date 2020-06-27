<template>
    <div class="container">
        <Icon name="left"/>
        <div><slot/></div>
        <div>保存</div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class EditTagTop extends Vue {

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: $theme_color;
        padding: 10px 20px;
    }
</style>