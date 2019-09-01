Page({
  data: {
     carts: [],               // 购物车列表
     hasList: false,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: false  // 全选状态，默认全选
  },
  onShow: function () {
    //  console.log(option.id);
    var that = this;
    var goods_arr = wx.getStorageSync('goods_arr');//拿添加到购物车中商品的id数组 
    var shuliang = wx.getStorageSync('shuliang');
    var arr = [];//开空数组  
    //console.log(goods_arr);  
    for (var i in goods_arr) {//对商品id组进行遍历  
      var subject = goods_arr[i];
      arr.push(subject);//通过push统一转移  
    }
    var post_id = arr.join();//将arr数组通过join方法转为字符串  
    // console.log(post_id);
    if (post_id != "") {
      wx.request({
        url: "后台接口" + post_id,
        data: {

        },
        header: {
          "Content-type": "json"
        },
        success: function (res) {
          // console.log(res.data);
          var carts = res.data;
          var hasList;
          if (carts.length == 0) {
            hasList = false;
          } else {
            hasList = true;
          }
          for (var i = 0; i < carts.length; i++) {
            var goods_id = carts[i].goods_id;
            carts[i].num = shuliang[goods_id];
            // console.log(carts[i].num);
          }
          that.setData({
            carts: res.data,
            hasList: hasList,
          })
        }
      })
    }
  },
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                   // 判断选中才会计算价格
        total += carts[i].num * carts[i].shop_price;     // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  },

  selectList(e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let carts = this.data.carts;                    // 获取购物车列表
    let selectAllStatus = this.data.selectAllStatus;  //获取全选状态
    const selected = carts[index].selected;         // 获取当前商品的选中状态
    carts[index].selected = !selected;              // 改变状态
    carts[index]['selected'] = !selected;
    //判断有一个没有选中，全选取消
    let j = 0;
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected == true) {
        j++;
        continue;
      } else {
        selectAllStatus = false;
      }
    }
    if (j == carts.length) {
      selectAllStatus = true;
    }

    //如果都选中，全选也选中实现
    this.setData({
      carts: carts,
      selectAllStatus: selectAllStatus,
    });
    this.getTotalPrice();                           // 重新获取总价
  },

  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
      carts[i]['selected'] = selectAllStatus;           // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();                               // 重新获取总价
  },

  // 增加数量
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  toBuy: function (e) {
    // var postId = event.currentTarget.dataset.postid;
    var that = this;
    var cart = [];
    var carts = this.data.carts;
    var address = wx.getStorageSync('addressInfo');
    // console.log(user)
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].selected == true) {
        cart.push(carts[i])   //获取选中的项
      }
    }
    wx.setStorageSync('order', cart);//过滤掉未选中的购物车商品
    // console.log(cart);
    var order = wx.getStorageSync('order');
    // console.log(order);
    // 未选中商品不能跳转
    if (order.length == 0) {
      wx.showModal({
        title: '请选择商品',
        // content: '未选中商品',
        success: function (res) {
          if (res.confirm) {
            // console.log('用户点击确定')
          } else if (res.cancel) {
            // console.log('用户点击取消')
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '../pay/pay?totalPrice=' + that.data.totalPrice
      })
    }

  },
  insertCart:function(){
      wx.navigateTo({
        url: '/pages/listgoods/index',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  },
  deleteList: function (e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    var that = this;
    wx.showModal({
      title: '提示',
      content: '你正准备从购物车中删除这个商品',
      success: function (res) {
        if (res.confirm) {
          var delId = e.currentTarget.dataset.delid;//转过来的商品id  
          var goods_arr = wx.getStorageSync('goods_arr');
          delete goods_arr[delId];//删除对象中的元素  
          var shuliang = wx.getStorageSync('shuliang');//拿添加到购物车中商品的订购量数组  
          delete shuliang[delId];//删除对象中的元素  
          carts.splice(index, 1); // 删除购物车列表里这个商品
          if (carts.length == 0) {
            var hasList = false;
          }
          that.setData({
            carts: carts,
            hasList: hasList
          });
          wx.setStorageSync('goods_arr', goods_arr);//重新设缓存  
          wx.setStorageSync('shuliang', shuliang);//重新设缓存 
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000
          });
          setTimeout(function () {
            wx.switchTab({
              url: "../home/home"
            })
          }, 2000);
        }
      }
    })
  },
})