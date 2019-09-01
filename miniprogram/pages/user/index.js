
const app = getApp()
Page({
	data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
		userInfo: {},
		items: [
			{
				icon: '/images/orders.svg',
				text: '我的订单',
				path: '/pages/orders/orders'
			}, 
			{
				icon: '/images/address.svg',
				text: '收货地址',
        path: '/pages/address/address'
			}, 
			{
				icon: '/images/hotline.svg',
				text: '联系客服',
				path: '18511337814',
			}, 
			
		],
		settings: [
			{
				icon: '/images/cache.svg',
				text: '清除缓存',
				path: ''
			}
		]
	},

  navigateTo(e){
    const index = e.currentTarget.dataset.index
    const path = e.currentTarget.dataset.path
    switch(index){
      case 0:
      wx.navigateTo({
        url: path,
      })
      break;
      case 1:
        wx.navigateTo({
          url: path,
        })
      break;
      case 2:
      wx.makePhoneCall({
        phoneNumber: path
      })
      break;
      
    }

  },
  bindtap(e) {
    const index = e.currentTarget.dataset.index
    const path = e.currentTarget.dataset.path
    var _this = this
    switch (index) {
      case 0:
        wx.showModal({
          title: '提示',
          content: '确定要清除本地缓存吗？',
          success(res) {
            if (res.confirm) {
              wx.clearStorage()
              _this.setData({
                'settings[0].path': `0KB`
              })
            } 
          }
        })
        
    }
  },
  onLoad() {
    var _this=this
    wx.getStorageInfo({
      success: function(res) {
          _this.setData({
            'settings[0].path': `${res.currentSize}KB`
          })
          
      },
    })
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
  },
	logout:function(){
   
  },
   
})