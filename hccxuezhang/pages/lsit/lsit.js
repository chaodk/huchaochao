// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
// pages/lsit/lsit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyvlue:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'UDGBZ-LYZCQ-OWC54-G45CL-QWXSV-IVFCC'
    });
    wx.showLoading({
      title: '学长裸奔中',
      mask: 'true'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading({
      title: '学长裸奔中',
      mask: 'true'
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var keyvueinfo = wx.getStorageSync('keyvue')
    var that = this
    this.setData({
      seainfo: keyvueinfo,
    });
    // 调用接口
    qqmapsdk.search({
      keyword: keyvueinfo,
      success: function (res) {
        console.log(res);
        that.setData({
          map: res
        })
        if (res.count == 0) {
          wx.showToast({
            title: '暂无匹配',
            icon: 'none',
            duration: 3000,
            success:function(){
              wx: wx.reLaunch({
                url: '/pages/index/index',
              })
            }
          })
        }
      }
    });
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
  bindlistinfo: function (e) {
    wx.navigateTo({
      url: '/pages/lsitinfo/lsitinfo?id=' + e.target.dataset.index,
    })
  }
})