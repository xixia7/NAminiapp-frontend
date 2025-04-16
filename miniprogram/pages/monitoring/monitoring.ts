// pages/monitoring/monitoring.ts
import dayjs from 'dayjs'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showCityBg: false,
    showFactoryBg: false,
    cityNaList: null,
    factoryNaList: null,
    cityMaxValue: 0,
    factoryMaxValue: 0,
    scrollHeight: '',
    today: dayjs().format('YYYY-MM-DD')

  },

  changeTab(event: Record<string, any>) {
    console.log("eee", event.detail.name)
    let id = event.detail.name
    if (id == 0) {
      this.setData({
        showCityBg: true,
        showFactoryBg: false,
      });
    } else {
      this.setData({
        showCityBg: false,
        showFactoryBg: true,
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

    // const windowHeight = wx.getSystemInfoSync().windowHeight;
    // console.log("windowHeight",windowHeight)
    // const topHeight = 
    // const height = windowHeight - 40 - 44 - 84 -10; // 进行相应的计算，比如减去固定高度

    // this.setData({
    //   scrollHeight: `${height}px`
    // });


    // 获取当前时间
    const currentTime = dayjs();

    // 设置上午十点的时间
    const tenAM = currentTime.set('hour', 10).set('minute', 0).set('second', 0);

    let targetDate;

    // 判断当前时间是否大于上午十点
    if (currentTime.isAfter(tenAM)) {
      // 大于十点，取今天日期
      targetDate = currentTime.format('YYYY-MM-DD');
    } else {
      // 小于十点，取昨天日期
      targetDate = currentTime.subtract(1, 'day').format('YYYY-MM-DD');
    }

    this.setData({
      today: targetDate
    })

    wx.request({
      // url: 'http://101.43.87.135/city/naInfo', // 替换为您的接口地址
      url: `https://dataonline.asia/city/naInfo?createDate=${this.data.today}`,
      method: 'GET',
      success: (res: Record<string, any>) => {
        // 请求成功，更新数据
        this.setData({
          showCityBg: true,
          cityNaList: res.data.data,
          cityMaxValue: Math.max(...res.data.data.map((x: Record<string, any>) => x.value))
        });
      },
      fail: (err) => {
        // 请求失败，请根据实际情况进行处理
        console.error('请求失败', err);
      }
    });

    wx.request({
      // url: 'http://101.43.87.135/city/naInfo', // 替换为您的接口地址
      url: `https://dataonline.asia/factory/naInfo?createDate=${this.data.today}`,
      method: 'GET',
      success: (res: Record<string, any>) => {
        // 请求成功，更新数据
        this.setData({
          showFacrotyBg: true,
          factoryNaList: res.data.data,
          factoryMaxValue: Math.max(...res.data.data.map((x: Record<string, any>) => x.value))
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
    const that = this;
    wx.getSystemInfo({
      success({ windowHeight, screenHeight, safeArea }) {
        // todo
        let tipHeight = 40, tabtitleHeight = 44, tarbarHeight = screenHeight - safeArea.bottom + 50

        const height = windowHeight - tipHeight - tabtitleHeight - tarbarHeight - 10; // 进行相应的计算，比如减去固定高度
        that.setData({
          scrollHeight: `${height}px`
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */

  onShow() {
    this.getTabBar().setData({ active: 0 })

    setTimeout(() => {
      this.setData({
        showCityBg: true
      });
    }, 500);

  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    this.setData({
      showCityBg: false
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.setData({
      showCityBg: false
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