<template>
    <div class="pop" :class="show==='block' && 'show'">
        <div class="board">
            <label>
                <span>{{span}}</span>
            </label>
            <div class="buttons">
                <button @click="write">白嫖了，我要记</button>
                <button @click="cancel">手误</button>
            </div>
        </div>
    </div></template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import store from "@/store/index2";

    @Component
    export default class WarnWindow extends Vue {
        @Prop(String) readonly span!: string
        @Prop(String) readonly show!: string;
        @Prop(Object) readonly record!: ReceiptData
        write(){
            this.$emit("update:show","none")
            store.createRecord(this.record)
            window.alert("记下一笔")
        }
        cancel(){
            this.$emit("update:show","none")
        }
    }
</script>

<style lang="scss" scoped>
    .pop {
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: none;
        &.show {
            display: block;
        }
        .board {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            width: 300px;
            height: 150px;
            border-radius: 20px;
            background: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            label {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                flex-grow: 1;
                > span {
                    font-weight: bold;
                }
            }
            .buttons {
                padding: 10px;
                width: 100%;
                display: flex;
                justify-content: space-around;
                border-top:1px solid #b5b5b5;
                button {
                    background: transparent;
                    border: 1px solid #333333;
                    border-radius: 4px;
                    text-align: center;
                    min-width: 45%;
                    &:first-child {

                    }
                    &:last-child {
                        background: #424242;
                        color: white;
                    }
                }
            }
        }
    }
</style>