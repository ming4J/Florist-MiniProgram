// pages/address/add/index.js
const isTel = (value) => !/^1[34578]\d{9}$/.test(value)
Page({

  /**
   * 页面的初始数据
   */
 

  data: {
    value3: '1',

    addresstxt: '',
    
  },
  
  onChange(field, e) {
    this.setData({ 
      [field]: e.detail.value
    })

    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  onChange3(e) {
    this.onChange('value3', e)
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

  onChange1(e) {
    console.log('onChange', e)
    this.setData({
      error: isTel(e.detail.value),
      value: e.detail.value,
    })
  },
  onFocus(e) {
    this.setData({
      error: isTel(e.detail.value),
    })
    console.log('onFocus', e)
  },
  onBlur(e) {
    this.setData({
      error: isTel(e.detail.value),
    })
    console.log('onBlur', e)
  },
  onConfirm(e) {
    console.log('onConfirm', e)
  },
  onClear(e) {
    console.log('onClear', e)
    this.setData({
      error: true,
      value: '',
    })
  },
  onError() {
    wx.showModal({
      title: 'Please enter 11 digits',
      showCancel: !1,
    })
  },

  chooseLocation( ) {
    var _this=this
    wx.authorize({ scope: "scope.userLocation" })
    wx.chooseLocation({
      success: function(res) {
        console.log(res.address)
        var address=res.address
        _this.setData({
          addresstxt:res.address
        })
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