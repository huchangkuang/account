<template>
  <Layout class-prefix="layout">
    <Type @update:type="updateType" />
    <Classify
      :icon-map="iconMap"
      @update:classify="receiptData.selectedIcon = $event"
      :type="receiptData.type"
    />
    <Receipt :receipt-data="receiptData" />
    <NumberPad
      :value.sync="receiptData.output"
      :currentTime="currentTime"
      @update:notes="receiptData.notes=$event"
      :record="receiptData"
      @update:record="updateRecord"
      @update:showDateTime="showDateTime=$event"
    />
    <TimeInput :show-date-time.sync="showDateTime" :value.sync="currentTime" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/money/numberPad.vue";
import Receipt from "@/components/money/Receipt.vue";
import Classify from "@/components/money/Classify.vue";
import { Component, Watch } from "vue-property-decorator";
import store from "@/store/index2";
import dayjs from "dayjs";
import TimeInput from "@/components/money/TimeInput.vue";

@Component({ components: { TimeInput, Classify, Receipt, NumberPad } })
export default class Money extends Vue {
  currentTime = dayjs(dayjs()).format("YYYY-MM-DD");
  @Watch("currentTime")
  updateCurrentTime() {
    this.receiptData.time = this.currentTime;
  }
  receiptData: ReceiptData = {
    selectedIcon: "餐饮",
    output: "0",
    notes: "",
    time: this.currentTime,
    type: "-",
  };
  iconMap = store.tagList;
  now = new Date();
  showDateTime = "none";
  updateRecord(event: ReceiptData) {
    store.recordList.push(event);
    store.saveRecord();
  }
  updateType(event: string) {
    this.receiptData.type = event;
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>
</style>