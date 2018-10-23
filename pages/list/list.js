/*岗位分类一览 */
var Bmob = require('../../dist/Bmob-1.6.3.min.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

    joblist: [
      
    ]

  },


  onLoad: function (options) {
    const query = Bmob.Query("quanguo_pjgz");
    query.order("-updatedAt")
    query.find().then(res => {
      console.log(res)
      this.setData({
          joblist: res
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