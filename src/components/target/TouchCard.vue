<template>
  <div class="background">
    <div class="keeping">
      <div class="number">{{keep}}</div>
      <div>已持续打卡</div>
    </div>
    <div class="touch" @click="touchCard">
      <Icon name="touchCard" />
      <span>打卡</span>
    </div>
    <div class="sum">
      <div class="number">{{sum}}</div>
      <div>记账总天数</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import dayjs from "dayjs";
import store from "@/store/index2";

@Component
export default class TouchCard extends Vue {
  keep = 0;
  sum = 0;
  date = this.formatTime(new Date().toISOString());
  lastCard = "0";
  mounted() {
    if (
      dayjs(this.date).valueOf() - dayjs(this.lastCard).valueOf() >
      3600 * 24 * 1000
    ) {
      this.keep = 0;
    }
    const record = store.recordList;
    const sumTime: string[] = [];
    for (let i = 0; i < record.length; i++) {
      if (sumTime.indexOf(record[i].time) < 0) {
        sumTime.push(record[i].time);
      }
    }
    this.sum = sumTime.length;
    this.keep = parseInt(window.localStorage.getItem("keep") || "0");
    this.lastCard = window.localStorage.getItem("date") || "0";
  }
  formatTime(date: string) {
    return dayjs(date).format("YYYY-MM-DD");
  }
  touchCard() {
    if (this.date === this.lastCard) {
      window.alert("今天已经打过卡咯");
    } else {
      window.alert("打卡成功，保持记账的好习惯哦！");
      this.lastCard = this.date;
      this.keep += 1;
      this.save();
    }
  }
  save() {
    window.localStorage.setItem("date", this.date);
    window.localStorage.setItem("keep", this.keep.toString());
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.background {
  background: $theme_color;
  border-radius: 0 0 16px 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 94px;
  font-weight: bold;

  .touch {
    background: white;
    padding: 4px 20px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      font-size: 32px;
    }
    span {
      margin-left: 6px;
    }
  }
  .number {
    text-align: center;
  }
}
</style>