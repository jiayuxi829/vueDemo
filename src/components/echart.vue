<template>
  <div id="pie" style="width: 600px;height: 400px;"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: '',
  data () {
    return {
      charts: '',
      opinion: ['行政人员', '财务人员', '市场人员', '研发人员', '管理人员'],
      opinionData: [
        { value: 335, name: '行政人员' },
        { value: 310, name: '财务人员' },
        { value: 234, name: '市场人员' },
        { value: 135, name: '管理人员' },
        { value: 1548, name: '研发人员' }
      ]
    }
  },
  methods: {
    drawPie (id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: this.opinion
        },
        series: [
          {
            name: '人员构成',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'blod'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.opinionData
          }
        ]
      })
    }
  },
  // 调用
  mounted () {
    this.$nextTick(function () {
      this.drawPie('pie')
    })
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
