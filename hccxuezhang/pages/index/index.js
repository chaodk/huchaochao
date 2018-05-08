// 引入SDK核心类
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;

// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 菜单栏
    muen:[
      {
        title:'酒店',
        icon:'/imges/icon/jiudian.png'
      },
      {
        title: '医院',
        icon: '/imges/icon/yiyuan.png'
      },
      {
        title: '维修',
        icon: '/imges/icon/weixiu.png'
      },
      {
        title: '公交站',
        icon: '/imges/icon/bus.png'
      },
      {
        title: '超市',
        icon: '/imges/icon/buy.png'
      },
      {
        title: '餐馆',
        icon: '/imges/icon/fan.png'
      },
      {
        title: 'KTV',
        icon: '/imges/icon/ktv.png'
      },
      {
        title: '电影院',
        icon: '/imges/icon/moive.png'
      },
      {
        title: '学校',
        icon: '/imges/icon/school.png'
      }
    ],

    //工具栏
    tool:[
      {
        url:'/pages/gps/gps',
        img:'/imges/icon/gps.png',
        name:'经纬度'
      }, 
      {
        url: '/pages/phone/phone',
        img: '/imges/icon/phone.png',
        name: '手机检测'
      },
      {
        url: '/pages/nj/nj',
        img: '/imges/icon/nj.png',
        name: '学长电台'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: 'UDGBZ-LYZCQ-OWC54-G45CL-QWXSV-IVFCC'
    });
    wx.showLoading({
      title:'学长裸奔中',
      mask:'true'
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //点击搜索
  formSubmit: function (e) {
    var keyvue = e.detail.value;
    // console.log(keyvue.seainfo)
    wx.setStorageSync('keyvue', keyvue.seainfo)
    this.setData({
      seainfo: e.detail.value
    });
    if (keyvue.seainfo == '') {
      wx.showToast({
        title: '请输入查询关键字',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx: wx.navigateTo({
        url: '/pages/lsit/lsit',
      })
    }
  },
  inpusea:function(e){
    if (e.detail.value==''){
      wx.showToast({
        title: '请输入查询关键字',
        icon: 'none',
        duration: 2000
      })
    }else{
      wx.setStorageSync('keyvue', e.detail.value)
      wx: wx.navigateTo({
        url: '/pages/lsit/lsit',
      })
    }
  },
  // 菜单
  bindkey:function(e){
    // console.log(e.currentTarget.dataset.datakey)
    var mueskey = e.currentTarget.dataset.datakey
    wx.setStorageSync('keyvue', mueskey)
    wx:wx.navigateTo({
      url: '/pages/lsit/lsit',
    })
  }
})