<template>
    <div class="container">
        <ul>
            <li v-for="i in icon" :key="i" @click="getIcon(i)">
                <Icon :name="i" :class="i === iconName && 'selected'"/>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Classify extends Vue {
        @Prop(String) readonly iconName!: string;
        icon = ["food", "shop", "clothes", "bus", "entertainment", "handshake", "chat", "medical",
            "alipay","time","star","beauty","travel","repair","snacks","sport","gift","house","social_wechat","social_sina",
            "part_time_job","salary","bonus","lottery"];
        getIcon(i: string) {
            this.$emit("update:iconName",i)
        }

    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .container {
        width: 90%;

        ul {
            display: flex;
            flex-wrap: wrap;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);

            li {
                width: 25%;
                height: 64px;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .icon {
                    width: 24px;
                    height: 24px;
                    border-radius: 4px;

                    &.selected {
                        background: $theme_color;
                    }
                }
            }
        }
    }
</style>