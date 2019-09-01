// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "热门推荐",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '留住好时光',
              image: "https://s2.ax1x.com/2019/03/06/kjg8SS.jpg"
            },
            {
              child_id: 2,
              name: '馨情无限',
              image: "https://s2.ax1x.com/2019/03/06/kjgQFP.jpg"
            },
            {
              child_id: 3,
              name: '幸福万年长',
              image: "https://s2.ax1x.com/2019/03/06/kjglJf.jpg"
            },
            {
              child_id: 4,
              name: '圆满',
              image: "https://s2.ax1x.com/2019/03/06/kjgKot.jpg"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "鲜花",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '玫瑰',
              image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g2985kc2w1j20a00ax75g.jpg"
            },
            {
              child_id: 2,
              name: '康乃馨',
              image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g2985kdinsj20a00axjsw.jpg"
            },
            {
              child_id: 3,
              name: '百合',
              image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g2985kdn7ij20a00axwfk.jpg"
            },
            {
              child_id: 4,
              name: '扶郎',
              image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g2985kdsbij20a00ax75r.jpg"
            },
            {
              child_id: 5,
              name: '向日葵',
              image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g2985kex5ij20a00axabt.jpg"
            },
            {
              child_id: 6,
              name: '郁金香',
              image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g2985kez5rj20a00axgoq.jpg"
            },
            {
              child_id: 7,
              name: '马蹄莲',
              image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g2985kebw5j20a00axjrz.jpg"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "永生花",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: '永生瓶花',
              image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298ckusf7j20a00axjsh.jpg"
            },
            {
              child_id: 2,
              name: '经典花盒',
              image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298ckuuvyj20a00ax74y.jpg"
            },
            {
              child_id: 3,
              name: '特色永生花',
              image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298cku6knj20a00axwex.jpg"
            },
            {
              child_id: 4,
              name: '巨型玫瑰',
              image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298ckurwfj20a00axab8.jpg"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "送花场景",
        ishaveChild: true,
        children: [
          {
          child_id: 1,
          name: '爱情鲜花',
            image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g2985kc2w1j20a00ax75g.jpg"
        },
          {
            child_id: 2,
            name: '老师长辈',
            image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298m0s0gzj20ku0mqdl7.jpg"
          },
          {
            child_id: 3,
            name: '友情鲜花',
            image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298m0j4xkj20a00axjsw.jpg"
          },
          {
            child_id: 4,
            name: '探病慰问',
            image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298m0jaghj20a00ax75k.jpg"
          }
          ,
          {
            child_id: 5,
            name: '商务鲜花',
            image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298m0lgwqj20a00axtcn.jpg"
          }
          ,
          {
            child_id: 6,
            name: '祝福庆贺',
            image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298m0jtk2j20a00axjsw.jpg"
          },
          {
            child_id: 7,
            name: '婚庆祝福',
            image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298m0lrnkj20a00axdh0.jpg"
          },
          {
            child_id: 8,
            name: '道歉鲜花',
            image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298m0me3dj20a00axgn8.jpg"
          },
          {
            child_id: 9,
            name: '哀思鲜花',
            image: "https://ws1.sinaimg.cn/thumbnail/b04b21b7ly1g298m0qx23j206406ot8v.jpg"
          }
          
        ]
      }
    ],
    curNav: 1,
    curIndex: 0
  },
  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
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