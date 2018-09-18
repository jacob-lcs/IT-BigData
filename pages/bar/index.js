import * as echarts from '../../ec-canvas/echarts';
var Bmob = require('../../dist/Bmob-1.6.3.min.js');
var app = getApp()
let chart = null;
var city = app.globalData.city
let that = this
// var city = this.data.current

Page({
  // handleChange({ detail }) {
  //   console.log("handleChange函数运行")
  //   this.setData({
  //     current: app.globalData.current
  //   });
  //   console.log("current值为：", this.data.current)
  // },

  handleChangeScroll({
    detail
  }) {
    console.log("handleChangeScroll函数运行")
    app.globalData.current_scroll = detail.key
    app.globalData.city = detail.key
    this.setData({
      current_scroll: app.globalData.current_scroll
    });
    app.globalData.city = detail.key
    console.log("app.globalData.current_scroll", app.globalData.current_scroll)
    this.setData({
      current: app.globalData.current_scroll
    })
    wx.redirectTo({
      url: '/pages/bar/index?city=' + app.globalData.current_scroll
    })
  },

  data: {
    current_scroll: app.globalData.current_scroll,
    ec: {
      onInit: initChart
    },
    guimo: {},
    current_scroll: app.globalData.current_scroll,
    showLoading: false
  },

  onReady() {
    setTimeout(function() {
      // 获取 chart 实例的方式
      console.log(chart)
      // console.log("在图像初始化中尝试：", that.data.shaoyu50)
    }, 2000);
  },

  onLoad: function(options) {
    if (options != null) {
      this.setData({
        current_scroll: options.city
      })
    }
    console.log("options: ", options)
  }
});

function initChart(canvas, width, height, city) {
  canvas.setChart(chart);
  city = app.globalData.city
  console.log("获取数据的城市名：", city)
  // city = this.data.current
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