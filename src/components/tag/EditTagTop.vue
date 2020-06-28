<template>
    <div class="container">
        <Icon name="left" @click="back"/>
        <div>
            {{title}}
        </div>
        <div @click="saveTag"><slot/></div>
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

        back() {
            this.$router.back();
        }

        saveTag() {
            store.createTag(this.icon, this.name);
            this.$router.back();
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