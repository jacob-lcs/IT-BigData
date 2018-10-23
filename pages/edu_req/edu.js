Page({

  /**
   * 页面的初始数据
   */
  data: {

    group:[
      {
        id:1,
        city:'北京',
        pic:"http://bmob-cdn-21583.b0.upaiyun.com/2018/10/21/cff428b74023091f804cdf3962c4eaae.png"
      },
      {
        id:2,
        city: '南京',
        pic: "http://bmob-cdn-21583.b0.upaiyun.com/2018/10/21/bd0a1f8640ce577b80d035ba60cb113f.png"
      },
      {
        id:3,
        city: '成都',
        pic: "http://bmob-cdn-21583.b0.upaiyun.com/2018/10/21/6b64022540326b9480b5c9e6f1f9b1a0.png"
      },
      {
        id:4,
        city: '大连',
        pic: "http://bmob-cdn-21583.b0.upaiyun.com/2018/10/21/40fe20384009da1b80ba2bcd357aa331.png"
      },
      {
        id:5,
        city: '长沙',
        pic: "http://bmob-cdn-21583.b0.upaiyun.com/2018/10/21/ad136fcf4020bb7d80c7b13c4570a25c.png"
      },
      {
        id: 6,
        city: '武汉',
        pic: "http://bmob-cdn-21583.b0.upaiyun.com/2018/10/21/ed2b221540d03d9f80528810df0c0e6e.png"
      },
      {
        id: 7,
        city: '宁波',
        pic: "http://bmob-cdn-21583.b0.upaiyun.com/2018/10/21/6a11e02940e098198045cea2758e7b64.png"
      },
      {
        id:8,
        city: '深圳',
        pic: "http://bmob-cdn-21583.b0.upaiyun.com/2018/10/21/d09f3b5b40ab7991808a4b63efca8611.png"
      },
      {
        id:9,
        city: '上海',
        pic: "http://bmob-cdn-21583.b0.upaiyun.com/2018/10/21/c55750a54059e23c80c926f0a54811bd.png"
      },
      {
        id:10,
        city: '广州',
        pic: "http://bmob-cdn-21583.b0.upaiyun.com/2018/10/21/738a91bc40a85dc7808e1a65f5dd8f6b.png"
      },
      
    ],
    
    cur:1,
    text: '可将不同城市的学历要求分为三个档次: \n高要求(本科及以上学历占比超过40%）\n较高要求(大专超过40%）\n低要求(初中及以下和无要求超过40%）\n\n十大城市中，对学历要求最高的城市是北京(54%），其次是南京(45%），第三高的是上海(43%）。\n除了这三个城市对本科及以上学历的要求占比超过40% 外，成都对高学历的要求刚好达到40%。其他城市只对学历有较高要求。\n\n总体来说，所有城市对IT行业学历要求较高，但几乎没有岗位要求博士学位，而无要求的比例也不小，所有城市都有20%左右的招聘对学历无要求。'

    
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