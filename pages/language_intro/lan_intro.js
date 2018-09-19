var Bmob = require('../../dist/Bmob-1.6.3.min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lan_list: [
    ]
  },


  onLoad: function (options) {
    const query = Bmob.Query("language_show");
    query.find().then(res => {
      console.log(res)
      this.setData({
        lan_list: res
      })
    });
   },

  onReady: function () { },

  onShow: function () { },

  onHide: function () { },

  onUnload: function () { },

  onPullDownRefresh: function () { },

  onReachBottom: function () { },

  onShareAppMessage: function () { }
})