// pages/predict/predict.js
let that = this
var result = ''

const { $Toast } = require('../../dist/base/index');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '',
    intro: ''
  },

  input_intro: function(e) {
    this.setData({
      intro: e.detail.value
    })
  },

  tijiao: function() {
    if (this.data.intro == '') {
      $Toast({
        content: '请输入一些内容哦~~',
        type: 'error'
      });
    } else {
      $Toast({
        content: '请稍等一会哦~~',
        type: 'loading'
      });
      wx.request({
        url: 'https://www.lcscoder.cn/predict',
        data: {
          intro: this.data.intro
        },
        header: {
          'content-type': 'application/json'
        },
        success(res) {
          result = res.data['info']
          wx.navigateTo({
            url: '../pre_result/index?result=' + result,
          })
          
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})