<template>
    <Layout class-prefix="lay">
        <div class="text">分类设置</div>
        <Type/>
        <SetTag class="set-tag" :iconMap="iconMap"/>
        <AddClassify class="add" />
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import SetTag from "@/components/tag/SetTag.vue";
    import AddClassify from "@/components/tag/AddClassify.vue";
    @Component({
        components: {AddClassify, SetTag}
    })
    export default class Tag extends Vue {
        iconMap = {
            food: "餐饮",
            shop: "购物",
            clothes: "服饰",
            bus: "交通",
            entertainment: "娱乐",
            handshake: "社交",
            chat: "通讯",
            medical: "医疗"
        };

    }
</script>

<style>
    .lay-content{
        display: flex;
        flex-direction: column;
    }
</style>
<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .text {
        text-align: center;
        background: $theme_color;
        font-weight: bold;
        font-size: 18px;
        padding-top: 8px;
    }
    .set-tag {
        flex-grow: 1;
    }
    .add {

    }
</style>