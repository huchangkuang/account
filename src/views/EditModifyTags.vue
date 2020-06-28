<template>
    <Layout class-prefix="tag-modify">
        <EditTagTop class="edit" :tag="tag" title="编辑标签" />
        <EditInput :value.sync="tag.name"  />
        <IconList class="icon-list" :icon-name.sync="tag.icon"/>
        <div class="delete" @click="remove">
            <Icon name="delete"/>
            <span>删除标签</span>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component} from "vue-property-decorator";
    import EditTagTop from "@/components/tag/EditTagTop.vue";
    import IconList from "@/components/IconList.vue";
    import store from '@/store/tagStore.ts';
    import EditInput from "@/components/tag/EditInput.vue";
    @Component({
        components: {EditInput, IconList, EditTagTop}
    })
    export default class EditModifyTags extends Vue {

        tag: Tag = {id:0, icon:"", name:""}
        created(){
            this.tag = store.findTag(this.$route.params.id)
        }
        remove(){
            store.deleteTag(this.$route.params.id)
            this.$router.back()
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
        flex-grow: 1;
        margin-top: 20px;
    }
    .delete {
        border-top: 1px solid #c4c4c4;
        padding: 8px 0;
        background: white;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
            width: 24px;
            height: 24px;
            margin-right: 10px;
        }
    }

</style>