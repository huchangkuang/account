<template>
    <div class="numberPad">
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>备注</button>
            <button>.</button>
            <button>0</button>
            <button>今天</button>
            <button class="ok">确认</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "numberPad"
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .numberPad {

        .buttons {
            display: flex;
            flex-wrap: wrap;
            box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.25);

            button {
                width: 25%;
                height: 64px;
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