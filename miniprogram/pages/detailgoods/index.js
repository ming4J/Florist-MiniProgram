// pages/detailgoods/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsinfo:[
      {
        goodsName:'热恋',
        goodsDecs:'29枝玫瑰，2支粉百合',
        goodsPrice:316,
        goodsRealPrice:416,
        goodsSaleNum:45292
      }

    ],

    rated:[
      {
        avatar: 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ugv47zsoj20dw0dw0sz.jpg',
        username: '王大锤',
        rate: 5,
        value:'花很新鲜和图片上一样漂亮，祝店家生意兴隆'
      },
      {
        avatar: 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ugv4n54yj20jg0jgwgk.jpg',
        username: '李二宝',
        rate: 5,
        value: '客服态度非常好，帮忙修改送货信息 。送达很及时，花很新鲜 。感谢'
      },
      {
        avatar: 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ugv4io2jj20jg0jggmv.jpg',
        username: '沈腾',
        rate: 5,
        value: '客服态度非常好，帮忙修改送货信息 。送达很及时，花很新鲜 。感谢'
      },
      {
        avatar: 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ugv4vfmbj20jg0jgdi8.jpg',
        username: '马丽',
        rate: 5,
        value: '客服态度非常好，帮忙修改送货信息 。送达很及时，花很新鲜 。感谢'
      },
      {
        avatar: 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ugv54303j20rs0rs42c.jpg',
        username: '张弛',
        rate: 5,
        value: '客服态度非常好，帮忙修改送货信息 。送达很及时，花很新鲜 。感谢'
      },
      {
        avatar: 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ugv5kwauj20kk0kk46y.jpg',
        username: '张飞',
        rate: 5,
        value: '客服态度非常好，帮忙修改送货信息 。送达很及时，花很新鲜 。感谢'
      },
      {
        avatar: 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ugv4gmn8j20dw0dw0sz.jpg',
        username: '夏洛',
        rate: 5,
        value: '客服态度非常好，帮忙修改送货信息 。送达很及时，花很新鲜 。感谢'
      },
    ],
    intro: ['https://ws1.sinaimg.cn/large/b04b21b7ly1g0ucnwlrqij20ku0kkabd.jpg', 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ucnxvhbej20kk1jrk08.jpg',
      'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ucnx6euhj20ku0m1q4v.jpg', 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ucnxft72j20ku0qhacj.jpg', 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ucnxojxij20ku0fv75v.jpg',
      'https://ws1.sinaimg.cn/large/b04b21b7ly1g0ucnxn4htj20ku0izacd.jpg'
    ],
    //图片地址
    imgList: ['https://ws1.sinaimg.cn/large/b04b21b7ly1g0u6r5zwbwj20ku0mqaes.jpg', 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0u6r5pf81j20by0d1jsy.jpg', 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0u6r5q841j20by0d1wf5.jpg', 'https://ws1.sinaimg.cn/large/b04b21b7ly1g0u6r5xz4gj20by0d1jtj.jpg'],
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
    current: 0
  },
  imageLoad: function (e) { //获取图片真实宽度  
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
    this.setData({
      current: e.detail.current
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