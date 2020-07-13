<template>
    <div class="pop" :class="appear==='block' && 'show'">
        <div class="board">
            <label>
                <span>{{span}}</span>
                <input type="text" :placeholder="placeholder" v-model="value" @input="onInput">
            </label>
            <div class="buttons">
                <button @click="cancel">取消</button>
                <button :class="confirmColor==='blue' && 'change'"
                        @click="confirm">确认</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class PopSetBudget extends Vue {
        @Prop(String) readonly appear!: string
        @Prop(String) readonly span!: string
        @Prop(String) readonly placeholder!: string
        value = ""
        confirmColor = "grey"
        cancel(){
            this.$emit("update:appear","none")
            this.value = ""
            this.onInput()
        }
        onInput(){
            if (this.value){
                this.confirmColor = "blue"
            }else {
                this.confirmColor = "grey"
            }
        }
        confirm(){
            this.$emit('update:value',this.value)
            this.cancel()
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

                > input {
                    border: none;
                    border-bottom: 1px solid  #b5b5b5;
                    text-align: center;
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
                    border: none;
                    &:first-child {
                        color: #1a73e8;
                    }
                    &:last-child {
                        color: #b5b5b5;
                        &.change {
                            color: #1a73e8;
                        }
                    }
                }
            }
        }
    }

</style>