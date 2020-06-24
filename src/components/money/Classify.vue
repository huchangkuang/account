<template>
    <div class="container">
        <ul>
            <li v-for="(key,index) in iconMap" :key="index" @click="getIndex(index,key)">
                <Icon :name="index" :class="index === itemName && 'selected'"/>
                <span>{{key}}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
0
    @Component
    export default class Classify extends Vue {
        @Prop(Object) iconMap!: object
        itemName = "food"
        getIndex(index: string,key: string){
            this.itemName = index
            this.$emit("update:classify",key)

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
            justify-content: space-around;
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