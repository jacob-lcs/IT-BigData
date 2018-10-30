// pages/predict/predict.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  tijiao:function(){
    wx.request({
      url: 'https://www.lcscoder.cn/predict', 
      data: {
        intro: '我擅长使用C++语言编写程序，多次参加ACM竞赛并获奖，而且对算法特别感兴趣'
      },
      header: {
        'content-type': 'application/json' 
      },
      success(res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})