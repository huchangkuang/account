<template>
    <Layout class-prefix="tag">
        <EditTagTop class="top">
            添加支出类别
        </EditTagTop>
        <EditLabel/>
        <IconList class="icon-list" :icon-name.sync="icon"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import EditTagTop from "@/components/tag/EditTagTop.vue";
    import IconList from "@/components/IconList.vue";
    import EditLabel from "@/components/tag/EditLabel.vue";

    @Component({
        components: {EditLabel, IconList, EditTagTop}
    })
    export default class EditTags extends Vue {
        icon = ""

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
        font-weight: bold;
    }

    .name {
        width: 100%;
        border-bottom: 1px solid #c4c4c4;
        padding: 10px 20px;
        display: flex;
        align-items: center;
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