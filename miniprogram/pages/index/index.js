//index.js
const app = getApp()

Page({
  data: {
    active:0,
    index:{
      normal:'/images/index.svg',
      active: '/images/index-active.svg'
    },
    sort:{
      normal:'/images/sort.svg',
      active: '/images/sort-active.svg'
    },
    sight:{
      normal: '/images/sight.svg',
      active: '/images/sight-active.svg'
    },
    cart:{
      normal: '/images/cart.svg',
      active: '/images/cart-active.svg'
    },
    user:{
      normal: '/images/user.svg',
      active:'/images/user-active.svg'
    },
    //图片地址
    imgList: ['https://s2.ax1x.com/2019/03/06/kjgudI.png', 'https://s2.ax1x.com/2019/03/06/kjgneA.png', 'https://s2.ax1x.com/2019/03/06/kjgeLd.png'],
    //是否采用衔接滑动  
    circular: true,
    //是否显示画板指示点  
    indicatorDots: true,
    //选中点的颜色  
    indicatorcolor: "#000",
    //是否竖直  
    vertical: false,
    //是否自动切换  
    autoplay: true,
    //自动切换的间隔
    interval: 2500,
    //滑动动画时长毫秒  
    duration: 100,
    //所有图片的高度  
    imgheights: [],
    //图片宽度 
    imgwidth: 750,
    //默认  
    current: 0,

    hotList: [
      {
        pic: 'https://s2.ax1x.com/2019/03/06/kjg8SS.jpg',
        title: '留住好时光',
        desc: '￥122'
      }, {
        pic: 'https://s2.ax1x.com/2019/03/06/kjgQFP.jpg',
        title: '馨情无限',
        desc: '￥220'
      }, {
        pic: 'https://s2.ax1x.com/2019/03/06/kjglJf.jpg',
        title: '幸福万年长',
        desc: '￥212'
      }, {
        pic: 'https://s2.ax1x.com/2019/03/06/kjgKot.jpg',
        title: '圆满',
        desc: '￥228'
      }, {
        pic: 'https://s2.ax1x.com/2019/03/06/kjg1W8.jpg',
        title: '恩情无限',
        desc: '￥226'
      }
    ],
    newList: [
      {
        pic: 'https://s2.ax1x.com/2019/03/06/kjgISO.jpg',
        title: '浪漫缤纷--戴安娜粉玫瑰',
        desc: '￥422'
      }, {
        pic: 'https://s2.ax1x.com/2019/03/06/kjgfFx.jpg',
        title: '热恋--红玫瑰50枝',
        desc: '￥320'
      }, {
        pic: 'https://s2.ax1x.com/2019/03/06/kjghY6.jpg',
        title: '恋恋不忘--香槟玫瑰99枝',
        desc: '￥262'
      }, {
        pic: 'https://s2.ax1x.com/2019/03/06/kjg4fK.jpg',
        title: '法式浪漫--红玫瑰19枝',
        desc: '￥228'
      }, {
        pic: 'https://s2.ax1x.com/2019/03/06/kjgRT1.jpg',
        title: '浪漫香气--11枝冷美人紫玫瑰',
        desc: '￥276'
      }
    ]

    
  },
  imageLoad: function (e) {//获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    console.log(imgwidth, imgheight)
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },

  bindchange: function (e) {
    // console.log(e.detail.current)
    this.setData({ current: e.detail.current })
  },

  onChange(event){
    var temp=event.detail;
    switch(temp){
      case 4:
        wx.navigateTo({
          url: '/pages/user/user'
        })
        break;
    }
  },
  toDetail:function(){
    wx.navigateTo({
      url: '/pages/detailgoods/index',
    })

  },
  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },
  sendfather:function(){
    wx.navigateTo({
      url: '/pages/listgoods/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  sendbrith: function () {
    wx.navigateTo({
      url: '/pages/listgoods/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  sendgf: function () {
    wx.navigateTo({
      url: '/pages/listgoods/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  sendill: function () {
    wx.navigateTo({
      url: '/pages/listgoods/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
