


Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:''
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
data:{
  list: [
    {
      name: '岗位分类',
      pic: "/images/gangwei.png",
      url: '/pages/list/list',
    },
    {
      name: '语言介绍',
      pic: '/images/gangwei.png',
      url: '/pages/language_intro/lan_intro',
    },
    {
      name: '大数据一览',
      pic: '/images/gangwei.png',
      url: '/pages/bigdatas/bigdatas',
    }
  ],

  imgUrls: [
    {
      url: '1.jpg'
    }, 
    {
      url: '2.jpg'
    }, 
    
  ],
  indicatorDots: true,  //小点
  autoplay: true,  //是否自动轮播
  interval: 5000,  //间隔时间
  duration: 3000,  //滑动时间

}
  
 
})