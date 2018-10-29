Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: ''
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

  bigdata: function () {
    wx.navigateTo({
      url: '/pages/bigdatas/bigdatas',
    })
  },

  joblist:function(){
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },

  lan_intro:function(){
    wx.navigateTo({
      url: '/pages/language_intro/lan_intro',
    })
  },

  predict:function(){
    wx.navigateTo({
      url: '/pages/predict/predict',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  data: {
    list: [{
        name: '岗位分类',
        url: '/pages/list/list',
      },
      {
        name: '语言介绍',
        url: '/pages/language_intro/lan_intro',
      },
      {
        name: '大数据一览',
        url: '/pages/bigdatas/bigdatas',
      }
    ],

    imgUrls: [{
        url: 'http://bmob-cdn-21583.b0.upaiyun.com/2018/09/18/c1b8844d4034753280e0ac9bf4a05a24.jpg'
      },
      {
        url: 'http://bmob-cdn-21583.b0.upaiyun.com/2018/09/18/72c6dcb240be36678002212ec77efd6b.jpg'
      },

    ],
    indicatorDots: true, //小点
    autoplay: true, //是否自动轮播
    interval: 5000, //间隔时间
    duration: 3000, //滑动时间

  }



})