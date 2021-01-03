// pages/home/homw.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "LiShen",
    movies: [
      {name: "我喜欢你", year: 2011, number: 100000},
      {name: "w两个世界", year: 2018, number: 13000},
      {name: "k two", year: 2015, number: 6000},
      {name: "爱", year: 2013, number: 80000}
    ],
    number: 0
  },
  handleIncrement() {
    this.setData({
      number: this.data.number +1 
    })
  },
  handleDecrement() {
    this.setData({
      number: this.data.number -1
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