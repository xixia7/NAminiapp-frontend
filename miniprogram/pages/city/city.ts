// pages/city/city.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    list: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.request({
      url: `https://dataonline.asia/city/naInfo?date=${''}`, // 替换为您的接口地址
      method: 'GET',
      success: (res:Record<string, any>) => {
        // 请求成功，更新数据
        this.setData({
          show: true,
          list: res.data.data,
          maxValue: Math.max(...res.data.data.map((x:Record<string, any>) => x.value))
        });
      },
      fail: (err) => {
        // 请求失败，请根据实际情况进行处理
        console.error('请求失败', err);
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  
  onShow() {
    this.getTabBar().setData({active: 0})
    
    setTimeout(() => {
      this.setData({
        show: true
      });
    }, 500);
        
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    this.setData({
      show: false
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.setData({
      show: false
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})