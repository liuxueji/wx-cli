const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this

        // 判断用户是否登录，就是判断app.globalData.userInfo是否等于null
        let userInfo = app.globalData.userInfo
        if(userInfo == null){
            // 如果用户没有登录，则重定向到登录页面
            wx.redirectTo({
              url: '/pages/login/login',
            })
        }else{
            // 不为null，表示已经登录，获取用户信息并展示
            that.setData({
                userInfo:userInfo
            })
        }
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