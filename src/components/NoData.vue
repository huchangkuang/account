<template>
    <div class="noData">
        <Icon name="write"/>
        <span>还没有记过账哦！快去记下一笔吧</span>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class NoData extends Vue {

    }
</script>

<style lang="scss" scoped>
    .noData {
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
            width: 48px;
            height: 48px;
        }
    }
</style>