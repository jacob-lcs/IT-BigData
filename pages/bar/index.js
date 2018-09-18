import * as echarts from '../../ec-canvas/echarts';
var Bmob = require('../../dist/Bmob-1.6.3.min.js');
var app = getApp()
let chart = null;
var city = "上海"

Page({
  onShareAppMessage: function(res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function() {},
      fail: function() {}
    }
  },
  data: {
    ec: {
      onInit: initChart
    },
    guimo: {},
    shaoyu50: 100,
    shaoyu150: '',
    shaoyu500: '',
    shaoyu1000: '',
    shaoyu5000: '',
    shaoyu10000: '',
    duo10000: '',
    city: "四平"
  },

  test: function() {
    duo10000 = 90
  },

  onReady() {
    setTimeout(function() {
      // 获取 chart 实例的方式
      console.log(chart)
      // console.log("在图像初始化中尝试：", that.data.shaoyu50)
    }, 2000);
    city = this.data.city
  },



});

function initChart(canvas, width, height, city) {
  canvas.setChart(chart);
  city = app.globalData.city
  const query = Bmob.Query("gongsi_guimo");
  query.equalTo("city", "==", city);
  query.find().then(res => {
    console.log(res)
    chart = echarts.init(canvas, null, {
      width: width,
      height: height
    });
    var option = {
      color: ['#37a2da', '#32c5e9', '#67e0e3'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ['热度', '正面', '负面']
      },
      grid: {
        left: 20,
        right: 20,
        bottom: 15,
        top: 40,
        containLabel: true
      },
      xAxis: [{
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }],
      yAxis: [{
        type: 'category',
        axisTick: {
          show: false
        },
        data: ['少于50人', '50 - 150人', '150 - 500人	', '500 - 1000人', '1000 - 5000人', '5000 - 10000人', '10000人以上'],
        axisLine: {
          lineStyle: {
            color: '#999'
          }
        },
        axisLabel: {
          color: '#666'
        }
      }],

      series: [{
        name: '上海',
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'inside'
          }
        },
        data: [res[0].shaoyu50, res[0].shaoyu150, res[0].shaoyu500, res[0].shaoyu1000, res[0].shaoyu5000, res[0].shaoyu10000, res[0].duo10000],
        itemStyle: {
          emphasis: {
            color: '#37a2da'
          }
        }
      }]
    };

    chart.setOption(option);
    return chart;
  });

}