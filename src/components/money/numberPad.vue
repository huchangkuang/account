<template>
    <div class="numberPad">
        <div class="buttons">
            <button @click="inputMoney">1</button>
            <button @click="inputMoney">2</button>
            <button @click="inputMoney">3</button>
            <button @click="remove">删除</button>
            <button @click="inputMoney">4</button>
            <button @click="inputMoney">5</button>
            <button @click="inputMoney">6</button>
            <button @click="clear">清空</button>
            <button @click="inputMoney">7</button>
            <button @click="inputMoney">8</button>
            <button @click="inputMoney">9</button>
            <button @click="inputNotes">备注</button>
            <button @click="inputMoney">.</button>
            <button @click="inputMoney">0</button>
            <button>今天</button>
            <button @click="ok" class="ok">确认</button>
        </div>
        <PopWindow :appear.sync="appear" @update:value="updateNotes" :span="'备注'" :placeholder="'在此输入备注'"/>
        <WarnWindow :show.sync="show" span="你有那么多钱嘛，小老弟"/>
        <Attention :show.sync="showAttention" span="你刚刚记了一笔0元的账" :record="record"/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import Attention from "@/components/Attention.vue";
    import store from "@/store/index2";
    @Component({
        components: {Attention}
    })
    export default class NumberPad extends Vue {
        @Prop(String) readonly value!: string;
        @Prop(Object) readonly record!: ReceiptData

        showAttention = "none"
        appear = "none"
        show = "none"
        inputNotes(){
            this.appear = "block"
        }
        updateNotes(event: string){
            this.$emit("update:notes",event)
        }
        inputMoney(event: MouseEvent) {
            const number = (event.target as HTMLButtonElement).textContent;
            if (this.value.length >= 8) {
                if ( parseInt(this.value)>=100000) {
                    this.show = "block"
                }
                return;
            }
            if (this.value === "0") {
                if (number && "0123456789".indexOf(number) >= 0) {
                    this.$emit("update:value", number);
                }
                if (number === "."){
                    this.$emit("update:value", this.value + number);
                }
            } else {
                if (this.value.indexOf(".") >= 0 && number === ".") {
                    return;
                } else {
                    this.$emit("update:value", this.value + number);
                }
            }
        }

        remove() {
            if (this.value.length === 1) {
                this.$emit("update:value", "0");
            } else {
                this.$emit("update:value", this.value.slice(0, -1));
            }
        }

        clear() {
            this.$emit("update:value", "0");
        }

        ok() {
            if (this.value === "0"){
                this.showAttention = "block"
            }else{
                store.createRecord(this.record)
                window.alert("记下一笔");
                this.$emit("update:value","0")
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .numberPad {
        width: 100%;

        .buttons {
            display: flex;
            flex-wrap: wrap;
            box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.25);

            button {
                width: 25%;
                height: 48px;
                background: transparent;
                border: none;
            }

            $number-bg: #f2f2f2;

            & :nth-child(1) {
                background: $number-bg;
            }

            & :nth-child(2), & :nth-child(5) {
                background: darken($number-bg, 4%);
            }

            & :nth-child(3), & :nth-child(6), & :nth-child(9) {
                background: darken($number-bg, 4*2%);
            }

            & :nth-child(4), & :nth-child(7), & :nth-child(10), & :nth-child(13) {
                background: darken($number-bg, 4*3%);
            }

            & :nth-child(8), & :nth-child(11), & :nth-child(14) {
                background: darken($number-bg, 4*4%);
            }

            & :nth-child(12), & :nth-child(15) {
                background: darken($number-bg, 4*5%);
            }

            & :nth-child(16) {
                background: darken($number-bg, 4*6%);
            }
        }
    }

</style>