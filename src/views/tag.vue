<template>
    <Layout class-prefix="lay">
        <div class="text">分类设置</div>
        <Type @update:type="updateType"/>
        <SetTag class="set-tag" :type="type"/>
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
        type = "-"
        updateType(event: string){
            this.type = event
        }
    }
</script>

<style lang="scss">
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
</style>