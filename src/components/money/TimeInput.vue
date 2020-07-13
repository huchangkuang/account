<template>
    <div class="container" :class="showDateTime">
        <div class="board">
            <label>
                <span>请选择日期</span>
                <input type="date" :value="value" @change="onChange">
            </label>
            <div class="buttons">
                <button @click="confirm">确认</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class TimeInput extends Vue {
        @Prop(String) readonly showDateTime!: string;
        @Prop(String) readonly value!: string
        confirm() {
            this.$emit("update:show-date-time", "none");
        }
        onChange(event: MouseEvent){
            this.$emit("update:value",(event.target as HTMLInputElement).value)
        }
    }
</script>

<style lang="scss" scoped>
    .container {
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
            transform: translate(-50%, -50%);
            width: 300px;
            height: 150px;
            border-radius: 20px;
            background: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;


            > label {
                flex-grow: 1;
                background: white;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                > input {
                    border: none;
                    border-radius: 4px;
                }
            }

            .buttons {
                padding: 10px;
                width: 100%;
                display: flex;
                justify-content: space-around;
                border-top: 1px solid #b5b5b5;

                button {
                    width: 100%;
                    background: transparent;
                    border: none;
                    color: #1a73e8;
                }
            }
        }
    }
</style>