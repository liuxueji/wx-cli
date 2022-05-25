const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    // 注册函数
    register(e){
        // console.log(e);//通过e获取到表单数据
        // 由于传入的数据要和服务器的保持一致，所以需要对数据进行处理
        let registerInfo = e.detail.value;
        // 删除userPwd1
        delete registerInfo.userPwd1

        let baseUrl = app.globalData.baseUrl
        // 根据用户名和密码从json-server服务器查询数据
        wx.request({
            url: baseUrl + 'users',
            method:"POST",
            header:{
                'content-type':'application/json'
            },
            // 传给服务器的数据
            data:registerInfo,
            success(res){
               if(res.data){//注册成功
                wx.navigateTo({
                  url: '/pages/login/login',
                })
                wx.showToast({
                    title: '注册成功',
                    icon:"success"
                  })
               }else{
                   wx.showToast({
                     title: '注册失败',
                     icon:"error"
                   })
               }
            }
          })
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

    }
})