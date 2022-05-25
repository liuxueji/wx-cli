// index.js
// 获取应用实例
const app = getApp()

Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    data:"",
    navs:"",
    articles:"",
    baseUrl:"",
    background: ['/images/bg1.png', '/images/bg2.png', '/images/bg3.png'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500
  },
  
  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function (options) {
    console.log(app.globalData.userInfo);
    let that = this
    // 获取全局变量baseUrl，赋值给局部变量
    let baseUrl = app.globalData.baseUrl
    this.setData({
      baseUrl : baseUrl
    })
    console.log(baseUrl);

    // 获得到data数据
    wx.request({
      url: baseUrl+"data",
      method:"GET",
      header:{
        "content-type":"application/json"
      },
      success(res){
        that.setData({
          data:res.data
        })
      },
      fail(err){
        console.log(err);
      }
    })

        // 获得到data数据
    wx.request({
      url: baseUrl+"data",
      method:"GET",
      header:{
        "content-type":"application/json"
      },
      success(res){
        that.setData({
          data:res.data
        })
      },
      fail(err){
        console.log(err);
      }
    })

    // 获得到navs数据
    wx.request({
      url: baseUrl+"navs",
      method:"GET",
      header:{
        "content-type":"application/json"
      },
      success(res){
        that.setData({
          navs:res.data
        })
      },
      fail(err){
        console.log(err);
      }
    })

    // 获得到articles数据
    wx.request({
      url: baseUrl+"articles?_page=1&_limit=3",
      method:"GET",
      header:{
        "content-type":"application/json"
      },
      success(res){
        that.setData({
          articles:res.data
        })
      },
      fail(err){
        console.log(err);
      }
    })
  }
})
