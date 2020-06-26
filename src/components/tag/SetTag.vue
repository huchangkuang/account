<template>
    <div class="list">
        <ul>
            <li v-for="(key,index) in iconMap" :key="index">
                <div class="icon-name">
                    <div class="icon-container">
                        <Icon :name="index"/>
                    </div>
                    <span>{{key}}</span>
                </div>
                <Icon name="right"/>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class SetTag extends Vue {
        @Prop(Object) iconMap!: object

    }
</script>

<style lang="scss" scoped>
    .list {
        > ul {
            > li {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 4px 10px;
                border-bottom: 1px solid #c4c4c4;
                margin-left: 20px;

                .icon-name {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    min-width: 25%;
                    min-height: 48px;

                    .icon-container {
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: #e0e0e0;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .icon {
                            width: 24px;
                            height: 24px;
                        }
                    }
                }
            }
        }
    }
</style>