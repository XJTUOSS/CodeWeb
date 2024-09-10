<script setup lang="ts">
import { ref } from "vue";
import Card from "@/components/Card/Card.vue";
const chartData = ref({
  labels: [
    "2021-01-01",
    "2021-02-01",
    "2021-03-01",
    "2021-04-01",
    "2021-05-01"
  ],
  datasets: [
    {
      label: "Issues",
      backgroundColor: "#ff6384",
      data: [20, 42, 37, 45, 54]
    }
  ]
});
</script>

<template>
  <Card title="Fuzz Testing">
    <div class="chart-container">
      <el-line-chart
        :data="chartData"
        :x-axis-name="'Date'"
        :y-axis-name="'Issues'"
        :legend-enabled="false"
      />
    </div>
  </Card>
</template>

<style scoped lang="scss">
.chart-container {
  width: 100%;
  height: 400px;
}
</style>
