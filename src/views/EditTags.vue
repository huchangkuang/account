<template>
    <Layout class-prefix="tag">
        <EditTagTop class="top">
            添加支出类别
        </EditTagTop>
        <label class="name">
            <input type="text" placeholder="输入类别名称，建议不超过四个汉字">
        </label>
        <IconList class="icon-list" :icon-map="iconMap"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import EditTagTop from "@/components/tag/EditTagTop.vue";
    import IconList from "@/components/IconList.vue";

    @Component({
        components: {IconList, EditTagTop}
    })
    export default class EditTags extends Vue {
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
    .tag-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<style lang="scss" scoped>
    .top {
        width: 100%;
    }

    .name {
        width: 100%;
        border-bottom: 1px solid #c4c4c4;
        padding: 10px 20px;
        display: flex;
        justify-content: center;

        input {
            width: 100%;
            border: none;
            border-bottom: 1px solid #333333;
            background: transparent;
        }
    }
    .icon-list {
        margin-top: 20px;
    }
</style>