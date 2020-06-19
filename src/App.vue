<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "~@/assets/style/helper.scss";
    @import "~@/assets/style/reset.scss";

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        font-family: $font_hei;
        line-height: 1.5;
        background: $bg_color;
    }
</style>
