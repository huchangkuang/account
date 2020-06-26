<template>
    <div class="container">
        +添加类别
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class AddClassify extends Vue {

    }
</script>

<style lang="scss" scoped>
.container {
    text-align: center;
    border-top: 1px solid #c4c4c4;
    padding: 8px 0;
    background: white;
}
</style>