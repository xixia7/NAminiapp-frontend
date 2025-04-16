// pages/mine/mine.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showId:null

  },
  goPingjia() {
    var plugin = requirePlugin("wxacommentplugin");
    plugin.openComment({
      success: (res:Record<string,any>) => {
        console.log('plugin.openTradeComment success', res)
      },
      fail: (res:Record<string,any>) => {
        console.log('plugin.openTradeComment fail', res)
      }
    })
  },
  showPopup(e:any) {
    let id = e.currentTarget.dataset.id
    this.setData({ showId: id });
  },

  onClose() {
    this.setData({ showId: null });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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
    // if (typeof this.getTabBar === 'function' && this.getTabBar()) {
    //   this.getTabBar().setData({
    //     active: getApp().globalData.tabIndex // 控制哪一项是选中状态
    //   })
    // }
    this.getTabBar().setData({active: 1})

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

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