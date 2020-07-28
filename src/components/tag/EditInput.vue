<template>
    <label>
        <span>标签名</span>
        <input type="text" :value="value" placeholder="输入类别名称，建议不超过四个汉字" maxlength="4"
               @input="input($event.target.value)">
    </label>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class EditLabel extends Vue {

        @Prop(String) value!: string
        input(value: string){
            this.$emit('update:value',value)
        }
    }
</script>

<style lang="scss" scoped>
    label {
        width: 100%;
        border-bottom: 1px solid #c4c4c4;
        padding: 10px 20px;
        display: flex;
        align-items: center;

        span {
            width: 20%;
        }

        input {
            width: 100%;
            border: none;
            border-bottom: 1px solid #333333;
            background: transparent;
            flex-grow: 1;
            text-align: center;
        }
    }
</style>