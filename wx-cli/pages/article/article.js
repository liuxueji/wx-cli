const app = getApp()
function getData(that){
    // 获取全局变量baseUrl，赋值给局部变量
    let baseUrl = app.globalData.baseUrl
    // 获得到articles数据
    wx.request({
        url: baseUrl+"articles?_page="+that.data.pageNum+"&_limit=5",
        method:"GET",
        header:{
          "content-type":"application/json"
        },
        success(res){
          that.setData({
            articles:res.data
          })
          console.log(that.data.articles);
          console.log(that.data.pageNum+"页数据");
        },
        fail(err){
          console.log(err);
        }
      })
    // 获得到总数据，由于还没写后台，所以再次发送请求
    wx.request({
        url: baseUrl+"articles",
        method:"GET",
        header:{
          "content-type":"application/json"
        },
        success(res){
          that.setData({
            total:res.data.length
          })
        }
      })
}
Page({
    data: {
        articles:[],
        baseUrl:"",
        pageNum:1,
        total:0,
        isData:false,
        isShow:false,
        // 节流阀，只有当请求发起完才能进行下一次请求
        // true表示节流阀打开，可以访问数据
        // false表示节流阀关闭，不能访问数据
        isLoading:true
    },
    onLoad: function (options) {
        let that = this
        let baseUrl = app.globalData.baseUrl
        this.setData({
            baseUrl:baseUrl
        })
        getData(that)
    },
    
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
        let that = this
        that.setData({
            articles:[],
            pageNum:1,
            isShow:false,
            isData:false
        })
        // 重新获取第一页数据
        getData(that)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        if(this.data.isLoading){
            let that = this;
            let baseUrl = that.data.baseUrl;
    
            // 每次上提，页码都需要+1，pageNum+1
            that.setData({
                pageNum:that.data.pageNum + 1,
                // 上拉函数触发，显示加载更多
                isShow:false,
                // 上拉函数触发，节流阀关闭
                isLoading:false
            })
    
            // 判断获取的值与总数是否相同，若相同则将isData=true，并且不发起请求
            if(this.data.total === this.data.articles.length){
                this.setData({
                    isData:true,
                    isShow:false
                })
            }else{
                // 获得到articles数据
            wx.request({
                url: baseUrl+"articles?_page="+that.data.pageNum+"&_limit=5",
                method:"GET",
                header:{
                  "content-type":"application/json"
                },
                success(res){
                  that.setData({
                    // 实现上拉加载更多，有两种实现方式：数组concat、展开运算符
                    articles:[...that.data.articles,...res.data],
                    // articles:that.data.articles.concat(res.data) 
                    
                    //数据获取成功，隐藏加载更多
                    isShow:false,
                    //数据加载完成，打开节流阀
                    isLoading:true
                  })
                  console.log(that.data.articles);
                  console.log(that.data.pageNum+"页数据");
                },
                fail(err){
                  console.log(err);
                }
              })
            }
        }else{
            return false
        }
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})