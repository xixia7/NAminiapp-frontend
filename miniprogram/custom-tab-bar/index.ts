Page({
  data: {
    active: 0,
    list: [
      {
        "pagePath": "/pages/monitoring/monitoring",
        "text": "空气吸收剂量率",
        "icon": "home-o"
      },
      {
        "pagePath": "/pages/mine/mine",
        "text": "说明",
        "icon": "setting-o"
      }
    ]
  },
  onChange(event:any) {
    // event.detail 的值为当前选中项的索引
    // 当反复点击当前的页面，就不做切换操作了
    if (event.detail !== this.data.active) {
      const activeIndex = event.detail;
      this.setData({ active: activeIndex });
      wx.switchTab({
        url: this.data.list[activeIndex].pagePath
      });
    }
  },
});
