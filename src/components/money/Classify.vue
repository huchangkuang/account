<template>
    <div class="container">
        <ul>
            <li>
                <Icon name="food"/>
                餐饮
            </li>
            <li>
                <Icon name="shop"/>
                购物
            </li>
            <li>
                <Icon name="clothes"/>
                服饰
            </li>
            <li>
                <Icon name="bus"/>
                交通
            </li>
            <li>
                <Icon name="entertainment"/>
                娱乐
            </li>
            <li>
                <Icon name="handshake"/>
                社交
            </li>
            <li>
                <Icon name="chat"/>
                通讯
            </li>
            <li>
                <Icon name="medical"/>
                医疗
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";

    @Component
    export default class Classify extends Vue {

    }
</script>

<style lang="scss" scoped>
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
                height: 48px;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .icon {
                    width: 24px;
                    height: 24px;
                }
            }
        }
    }
</style>