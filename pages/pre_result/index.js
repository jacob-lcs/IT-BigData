// pages/pre_result/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:'',
    imgurl1:'',
    imgurl2:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var img1=''
    var img2=''
    if (options.result == "算法工程师"){
      img1 ="https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/算法工程师数量.png?sign=a6433102e693104a080662ad63961cab&t=1547405715"
      img2 ="https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/算法工程师薪资.png?sign=4b5027db4abad85a82fa04ffa4512028&t=1547406454"
    } else if (options.result == "ERP实施顾问"){
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/ERP实施顾问数量.png?sign=afe289e352818616372a240ff880ac1a&t=1547406488"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/ERP实施顾问薪资.png?sign=42e84b4c8e62736e0ecea73dfbf90e0e&t=1547406496"
    } else if (options.result == "ERP技术开发") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/ERP技术开发数量.png?sign=7016ffe8beff87cc79f0d89843f95cdc&t=1547406514"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/ERP技术开发薪资.png?sign=36d9f914e415a730ea2cb1f0ca073857&t=1547406523"
    } else if (options.result == "SEO/SEM") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/SEOSEM数量.png?sign=ad31cb628213f76bcb150eaa3bf77417&t=1547406551"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/SEOSEM薪资.png?sign=06c3214f88a7500f488ad29310466561&t=1547406562"
    } else if (options.result == "UI设计师/顾问") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/UI设计师顾问数量.png?sign=6df1eae24e44618f2597fa2c11dc040e&t=1547406903"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/UI设计师顾问薪资.png?sign=7e7363062f562eb79142aa2b0f294f43&t=1547406913"
    } else if (options.result == "Web前端开发") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/Web前端开发数量.png?sign=e00fecb1170ee1db24dd47778f1b1173&t=1547406920"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/Web前端开发薪资.png?sign=b963330d5bd3d30799b163f7ba83efa0&t=1547406928"
    } else if (options.result == "产品总监") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/产品总监数量.png?sign=a51f3d79f294e8aa5073e10629ace565&t=1547406940"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/产品总监薪资.png?sign=fd2d82e77ca8506ba1505f362063a5af&t=1547406948"
    } else if (options.result == "大数据开发/分析") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/大数据开发分析数量.png?sign=97760b5a7be4399b847ff6da6979b4f4&t=1547406959"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/大数据开发分析薪资.png?sign=28ec718803cd1d2ef928b90581ad93fb&t=1547406968"
    } else if (options.result == "多媒体/游戏开发工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/多媒体游戏开发工程师数量.png?sign=7b0c6a59c497f9346d4b5ed61489a24d&t=1547406978"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/多媒体游戏开发工程师薪资.png?sign=abb13044bb03b40ceee325f1840dce4e&t=1547406987"
    } else if (options.result == "互联网软件开发工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/互联网软件开发工程师数量.png?sign=5aa41797d6e94c8157d6220bd8f7517a&t=1547406999"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/互联网软件开发工程师薪资.png?sign=379c1fd9b301d0bfac05550ef86bd453&t=1547407006"
    } else if (options.result == "技术文员/助理") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/技术文员助理数量.png?sign=afa8cc4321b2ff826fb6d8a24ce1cf66&t=1547407019"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/技术文员助理薪资.png?sign=0cc5ea64cdc24bfc90d4318a07c559ba&t=1547407029"
    } else if (options.result == "技术支持/维护工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/技术支持维护工程师数量.png?sign=5c668ee5f6899a7efdbcc297c2b01996&t=1547407060"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/技术支持维护工程师薪资.png?sign=54071d1a6df19c512f8850d9bbbf436d&t=1547407070"
    } else if (options.result == "软件UI设计师/工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/软件UI设计师工程师数量.png?sign=906a8f50080721c580ac693af3ee4c66&t=1547407082"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/软件UI设计师工程师薪资.png?sign=94144a53b904d2fdb88a7a9286e8693c&t=1547407094"
    } else if (options.result == "软件测试") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/软件测试数量.png?sign=0f20f9bc8a64a4668bf5c040ea8a2517&t=1547407101"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/软件测试薪资.png?sign=73eadb31c56426ef3d83c7bab4768d06&t=1547407109"
    } else if (options.result == "软件工程师" || options.result == "高级软件工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/软件工程师数量.png?sign=f7e9ff609478ed7bc742fdeee555b15d&t=1547407119"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/软件测试薪资.png?sign=3accc80ea412578b7ce6da79e282463a&t=1547407126"
    } else if (options.result == "手机应用开发工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/手机应用开发工程师数量.png?sign=636203ba2d2c87dd41f1f8fe4ec26cb8&t=1547407152"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/技术支持维护工程师薪资.png?sign=bd2c75f441e7c764dbc7819c3289ecda&t=1547407160"
    } else if (options.result == "数据库工程师/管理员") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/数据库工程师管理员数量.png?sign=4780fe7e7b26da8fe858c80cde8b9542&t=1547407185"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/数据库工程师管理员薪资.png?sign=feeb6ff0de58fd06cb16f60ef293a7af&t=1547407195"
    } else if (options.result == "网络工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/网络工程师数量.png?sign=65b4f284633a1924050b92b1b27c5747&t=1547407208"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/网络工程师薪资.png?sign=e55be75ab97fa09d35b9674dbdc29d65&t=1547407215"
    } else if (options.result == "网络管理(Helpdesk)") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/网络管理数量.png?sign=0081c165ececd0c6bab2f22981520263&t=1547407229"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/网络管理薪资.png?sign=c844488ba8e251be0f4707c153f1a641&t=1547407238"
    } else if (options.result == "网络信息安全工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/网络信息安全工程师.png?sign=f0f61744453d4a0cb6bbf3c118afd2e9&t=1547407248"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/网络信息安全工程师薪资.png?sign=0680b79d9a11671a7278875e25224652&t=1547407255"
    } else if (options.result == "网页设计/制作/美工") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/网页设计制作美工数量.png?sign=63482d57bcbe966914ac7208858454ba&t=1547407263"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/网页设计制作美工薪资.png?sign=c4adbb9f2ed70649381d8c5967fd63b1&t=1547407275"
    } else if (options.result == "系统测试"){
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/系统测试数量.png?sign=629bceb452f1138b02b5c7ac18368c4b&t=1547407284"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/系统测试薪资.png?sign=e2d31d668d88a81d3ce0675128f415ca&t=1547407291"
    } else if (options.result == "系统工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/系统工程师数量.png?sign=5dc804cfd1a959772c265cf1a4cd24ff&t=1547407305"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/系统工程师薪资.png?sign=ce1fd383ba7f235bc0d28e663a19bf1a&t=1547407313"
    } else if (options.result == "系统管理员/网络管理员") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/系统管理员网络管理员数量.png?sign=539e3675b2baf1f13633eeab23089680&t=1547407322"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/系统管理员网络管理员薪资.png?sign=b3496fe01acc755b15a6f5478b604b10&t=1547407330"
    } else if (options.result == "系统集成工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/系统集成工程师数量.png?sign=16fd0fede8997ec14aad15cea6ebc0d0&t=1547407342"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/系统集成工程师薪资.png?sign=3282874d617f7e5f6b296e3fd76c9bcc&t=1547407353"
    } else if (options.result == "系统架构设计师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/系统架构设计师数量.png?sign=2ac136123be9eca1e10e4a771ac96550&t=1547407365"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/系统架构设计师薪资.png?sign=fc5692f9ebe074d7014b9b97835cb87d&t=1547407371"
    } else if (options.result == "项目经理") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/项目经理数量.png?sign=4ecd02f7742fcb4d8b2e3745fcbe0cfa&t=1547407389"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/项目经理薪资.png?sign=da30abfce6a79369791fa1d2508f0e44&t=1547407395"
    } else if (options.result == "信息技术经理/主管") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/信息技术经理主管数量.png?sign=7dd3476712d1bda2fdbfd44e1f266bc7&t=1547407415"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/信息技术经理主管薪资.png?sign=3d19db3a2afbfa79d6a86cbeff7f48e0&t=1547407424"
    } else if (options.result == "需求工程师" || options.result == "高级硬件工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/需求工程师数量.png?sign=91ca252804c337e21b5ac3b7210629d2&t=1547407444"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/需求工程师薪资.png?sign=6e4a80d853f34d6e6734ad427fb0cae9&t=1547407451"
    } else if (options.result == "硬件工程师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/硬件工程师职位数量.png?sign=abc401101580fc211774adcc2a5f3f3c&t=1547407468"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/硬件工程师薪资.png?sign=624d61714bc644d45def8240645034cf&t=1547407477"
    } else if (options.result == "游戏策划师") {
      img1 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/游戏策划师数量.png?sign=f403045babcc28195b788f509662c5f4&t=1547407485"
      img2 = "https://6269-bigdata-881a98-1256377994.tcb.qcloud.la/BigData-image/游戏策划师薪资.png?sign=a7b0d0aeefe555bfc4362b8bb2a2e888&t=1547407494"
    }
    this.setData({
      result: options.result,
      imgurl1: img1,
      imgurl2: img2

    })
    console.log("传递给预测结果的数据",this.data.result)
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