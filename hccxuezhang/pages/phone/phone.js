// pages/phone/phone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:[]
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
  bindphomne:function(){
    var that=this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          phone: res
        });
        console.log(res)
        console.log('手机品牌:'+res.brand)//手机品牌
        console.log('手机型号:' +res.model)//手机型号
        console.log('操作系统版本:' +res.system)//操作系统版本
        console.log('客户端平台:' +res.platform)//客户端平台
      }
    })
  }
})