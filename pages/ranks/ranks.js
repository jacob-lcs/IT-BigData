Page({

  /**
   * 页面的初始数据
   */
  data: {
    ranks:[
      {
        id:1,
        name: '满意度排行榜',
        pic:'http://bmob-cdn-21583.b0.upaiyun.com/2018/10/23/05b01d1c40cd6e4f804f3c5630a17a56.png'
      },
      {
        id: 2,
        name: '不满意度排行榜',
        pic:'http://bmob-cdn-21583.b0.upaiyun.com/2018/10/22/436e441740b11b2c800f4256ad58bd39.png'
      },
      {
        id: 3,
        name: '福利待遇哪家好',
        pic:''
      },
      {
        id: 4,
        name: '工资低吐槽排行榜',
        pic:''
      },
      {
        id: 5,
        name: '谁家加班多',
        pic:''
      },
      {
        id: 6,
        name: '工作压力大',
        pic:''
      },
      {
        id: 7,
        name: '员工流动性',
        pic:''
      },
      {
        id: 8,
        name: '年轻成员多',
        pic:''
      },
    ],

    cur: 1
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
    
  },

  windowTab: function (e) {
    let i = e.target.dataset.index;
    this.setData({
      cur: i
    })
  }


  
})