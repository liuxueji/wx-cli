// 引入富文本解析器
var WxParse = require('../../wxParse/wxParse.js');

const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        contents:"",
        baseUrl:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let id = options.id
        let baseUrl = app.globalData.baseUrl
        this.setData({
            baseUrl:baseUrl
        })
        let that = this;
        wx.request({
            url: baseUrl+"articles/"+id,
            method:"GET",
            header:{
              "content-type":"application/json"
            },
            success(res){
              that.setData({
                contents:res.data
              })
              console.log(res.data);
              WxParse.wxParse('content' , 'html', res.data.content, that)
            },
            fail(err){
              console.log(err);
            }
          })
        // 1.bindName绑定的数据名(必填)
        // 2.type可以为html或者md(必填)
        // 3.data为传入的具体数据(必填)
        // 4.target为Page对象,一般为this(必填)
        // 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
        // WxParse.wxParse(bindName , type, data, target,imagePadding)
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