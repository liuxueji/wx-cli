const app = getApp()
Page({
    data: {
        userInfo:""
    },

    // 登录函数
    login(e){
        // console.log(e);//通过e获取到表单数据
        // 获取要提交的用户名和密码，用变量存储
        let userName = e.detail.value.username
        let userPwd = e.detail.value.userpwd
        console.log(userName,userPwd);

        let that = this
        let baseUrl = app.globalData.baseUrl
        // 根据用户名和密码从json-server服务器查询数据
        wx.request({
          url: baseUrl + `users?userName=${userName}&userPwd=${userPwd}`,
          method:"GET",
          header:{
              'content-type':'application/json'
          },
          success(res){
              if(res.data.length>0){
                  wx.switchTab({
                    url: '/pages/my/my',
                  })
                  wx.showToast({
                    title: '登录成功',
                    icon:'success'
                  })
                  // 本地缓存
                  wx.setStorage({
                      key:"userInfo",
                      data:{
                          userName:userName,
                          userPwd:userPwd
                      }
                  })
                  // 在全局中，存储用户信息
                  app.globalData.userInfo = res.data[0]
              }else{
                  wx.showToast({
                    title: '用户名或密码错误',
                    icon:'error'
                  })
              }
          }
        })
    },
    // 跳转到注册页面
    gotoReg(){
        wx.navigateTo({
          url: '/pages/register/register',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this
        // 获取本地缓存数据
        wx.getStorage({
            key:'userInfo',
            success(res){
                that.setData({
                    userInfo:res.data
                })
            }
        })
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