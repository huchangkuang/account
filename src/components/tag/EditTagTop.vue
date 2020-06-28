<template>
    <div class="container">
        <Icon name="left" @click="goBack"/>
        <div>
            {{title}}
        </div>
        <div @click="saveTag">
            <slot/>
        </div>
        <WarnWindow :show.sync="show" :span="span"/>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import store from "@/store/index2";

    @Component
    export default class EditTagTop extends Vue {
        @Prop(String) readonly icon!: string;
        @Prop(String) readonly name!: string;
        @Prop(String) readonly title!: string;

        show = "none";
        span = "";

        goBack() {
            this.$router.back();
        }
        popWarn(span: string){
            this.show = "block";
            this.span = span;
        }
        saveTag() {
            if (!this.name) {
                this.popWarn("标签名不能为空")
            } else if (!this.icon) {
                this.popWarn("请选择一个图标")
            } else {
                if (store.createTag(this.icon, this.name) === "duplicated"){
                    this.popWarn("标签名已经存在")
                }else{
                    store.createTag(this.icon, this.name);
                    this.goBack()
                    store.saveTag()
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: $theme_color;
        padding: 10px 20px;
    }
</style>