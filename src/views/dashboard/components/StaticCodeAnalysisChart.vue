<script setup lang="ts">
import { ref } from "vue";
import Card from "@/components/Card/Card.vue";
import { Line } from "vue-chartjs";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

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
      backgroundColor: "#36a2eb",
      data: [15, 30, 25, 35, 40]
    }
  ]
});
</script>

<template>
  <Card title="Static Code Analysis">
    <div class="chart-container">
      <Line
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
