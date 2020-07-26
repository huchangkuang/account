<template>
    <div class="container">
        <ul>
            <li v-for="tag in iconMap.filter(i=>i.type === type)" :key="tag.id" @click="getIndex(tag.icon,tag.name)">
                <Icon :name="tag.icon" :class="tag.icon === itemName && 'selected'"/>
                <span>{{tag.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop, Watch} from "vue-property-decorator";

    @Component
    export default class Classify extends Vue {
        @Prop(Array) readonly iconMap!: Tag[]
        @Prop(String) readonly type!: string
        itemName = "food"
        getIndex(index: string,key: string){
            this.itemName = index
            this.$emit("update:classify",key)
        }
        @Watch("type")
        updateName(){
            this.itemName = this.type === "-" ? "food" : "part_time_job"
            this.$emit("update:classify",this.itemName === "food" ? "餐饮" : "兼职")
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
                @media(max-height: 580px) {
                    font-size: 14px;
                    height: 48px;
                    .icon {
                        width: 22px;
                        height: 22px;
                    }
                }
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
