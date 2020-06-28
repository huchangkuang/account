<template>
    <div class="list">
        <div class="container">
            <router-link class="rout-link" :to="`/edit/modify/${tag.id}`" v-for="tag in iconMap" :key="tag.id">
                <div class="icon-name">
                    <div class="icon-container">
                        <Icon :name="tag.icon"/>
                    </div>
                    <span>{{tag.name}}</span>
                </div>
                <Icon name="right"/>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import store from "@/store/index2";

    @Component
    export default class SetTag extends Vue {
        iconMap = store.tagList

    }
</script>

<style lang="scss" scoped>
    .list {
        .container {
            .rout-link {
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