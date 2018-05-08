// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
// pages/lsitinfo/lsitinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "/imges/hcc.jpg",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    this.setData({
      idx: options.id
    })
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
    var that = this
    var keyvueinfo = wx.getStorageSync('keyvue')
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
            duration: 2000
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
  //点击号码呼叫
  bintel:function(){
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.map.data[that.data.idx].tel //电话号码
    })
  },
  //点击导航
  bindmap:function(){
    var that = this;
    wx.openLocation({ //出发wx.openLocation API
      latitude: Number(that.data.map.data[that.data.idx].location.lat), //坐标纬度（从地图获取坐标）
      longitude: Number(that.data.map.data[that.data.idx].location.lng), //坐标经度（从地图获取坐标）
      name: that.data.map.data[that.data.idx].title, //打开后显示的地址名称
      address: that.data.map.data[that.data.idx].address //打开后显示的地址汉字
    })
  }
})