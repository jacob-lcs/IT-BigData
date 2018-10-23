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
        pic:'http://bmob-cdn-21583.b0.upaiyun.com/2018/10/23/ec464525407c5a1b80730bb13b1bba1e.png'
      },
      {
        id: 3,
        name: '福利待遇哪家好',
        pic:'http://bmob-cdn-21583.b0.upaiyun.com/2018/10/23/1546cb6a409877df801a6fc651be79c2.png'
      },
      {
        id: 4,
        name: '个人发展空间大，机会多',
        pic: 'http://bmob-cdn-21583.b0.upaiyun.com/2018/10/23/747e186840cff81880a37dcc9fc81881.png'
      },
      {
        id: 5,
        name: '工资低吐槽排行榜',
        pic:'http://bmob-cdn-21583.b0.upaiyun.com/2018/10/23/c477370240abb24c809e2e8718ad014e.png'
      },
      {
        id: 6,
        name: '谁家加班多',
        pic:'http://bmob-cdn-21583.b0.upaiyun.com/2018/10/23/4c573f7c404edf8a80266946800369e7.png'
      },
      {
        id: 7,
        name: '工作压力大',
        pic:'http://bmob-cdn-21583.b0.upaiyun.com/2018/10/23/e708e106401abbfe805d37bc1473a268.png'
      },
      {
        id: 8,
        name: '员工流动性',
        pic:'http://bmob-cdn-21583.b0.upaiyun.com/2018/10/23/166af4b940d5454480ab0ae2d216ddb8.png'
      },
      {
        id: 9,
        name: '年轻成员多',
        pic:'http://bmob-cdn-21583.b0.upaiyun.com/2018/10/23/9196422d40f0c4b580c595041807b25a.png'
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