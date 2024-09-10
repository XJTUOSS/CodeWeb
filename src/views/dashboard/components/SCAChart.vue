<template>
  <el-container>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="8">
          <div ref="pieChart1" class="chart" />
        </el-col>
        <el-col :span="8">
          <div ref="pieChart2" class="chart" />
        </el-col>
        <el-col :span="8">
          <div ref="pieChart3" class="chart" />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { ElRow, ElCol, ElContainer, ElHeader, ElMain } from "element-plus";

const pieChart1 = ref(null);
const pieChart2 = ref(null);
const pieChart3 = ref(null);

const componentOption = {
  title: {
    text: "组件统计",
    left: "left"
  },
  tooltip: {
    trigger: "item"
  },
  legend: {
    orient: "vertical",
    left: "left"
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: "center"
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "14",
          fontWeight: "bold"
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 35, name: "超危" },
        { value: 25, name: "高危" },
        { value: 15, name: "中危" },
        { value: 10, name: "低危" },
        { value: 15, name: "未知" }
      ]
    }
  ]
};

const initPieChart = (dom, title) => {
  const chart = echarts.init(dom.value);
  const option = {
    title: {
      text: title,
      left: "left"
    },
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "vertical",
      left: "left"
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center"
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "14",
            fontWeight: "bold"
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: "搜索引擎" },
          { value: 735, name: "直接访问" },
          { value: 580, name: "邮件营销" },
          { value: 484, name: "联盟广告" },
          { value: 300, name: "视频广告" }
        ]
      }
    ]
  };
  chart.setOption(option);
};

onMounted(() => {
  initPieChart(pieChart1, "销售统计");
  initPieChart(pieChart2, "访问统计");
  initPieChart(pieChart3, "市场统计");
});
</script>

<style scoped>
.chart {
  height: 300px;
}
</style>
