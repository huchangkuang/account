<template>
    <Layout class-prefix="tag-modify">
        <EditTagTop class="edit">编辑标签</EditTagTop>
        <EditLabel :value="tag.name"/>
        <IconList class="icon-list" :icon-name.sync="tag.icon"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import EditTagTop from "@/components/tag/EditTagTop.vue";
    import IconList from "@/components/IconList.vue";
    import store from '@/store/tagStore.ts';
    import EditLabel from "@/components/tag/EditLabel.vue";
    @Component({
        components: {EditLabel, IconList, EditTagTop}
    })
    export default class EditModifyTags extends Vue {
        tag: Tag = {id:0, icon:"", name:""}
        created(){
            this.tag = store.findTag(this.$route.params.id)
        }
    }
</script>

<style>
    .tag-modify-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
<style lang="scss" scoped>
    .edit {
        width: 100%;
        font-weight: bold;
    }
    .icon-list {
        margin-top: 20px;
    }

</style>