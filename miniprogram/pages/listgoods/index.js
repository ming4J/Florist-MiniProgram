Page({
  data: {
    items: [{
      type: 'radio',
      label: '综合',
      value: 'updated',
      groups: ['001'],
    },
    {
      type: 'text',
      label: '销量',
      value: 'forks',
      groups: ['002'],
    },
    {
      type: 'sort',
      label: '价格',
      value: 'stars',
      groups: ['003'],
    },
    {
      type: 'text',
      label: '最新',
      value: 'text',
      
    },
    ],
  },
  // onLoad() {
  //   this.getRepos()
  // },
  // onChange(e) {
  //   const { checkedItems, items } = e.detail
  //   const params = {}

  //   console.log(checkedItems, items)

  //   checkedItems.forEach((n) => {
  //     if (n.checked) {
  //       if (n.value === 'updated') {
  //         const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
  //         params.sort = n.value
  //         params.order = selected
  //       } else if (n.value === 'stars') {
  //         params.sort = n.value
  //         params.order = n.sort === 1 ? 'asc' : 'desc'
  //       } else if (n.value === 'forks') {
  //         params.sort = n.value
  //       } else if (n.value === 'filter') {
  //         n.children.filter((n) => n.selected).forEach((n) => {
  //           if (n.value === 'language') {
  //             const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
  //             params.language = selected
  //           } else if (n.value === 'query') {
  //             const selected = n.children.filter((n) => n.checked).map((n) => n.value).join(' ')
  //             params.query = selected
  //           }
  //         })
  //       }
  //     }
  //   })

  //   this.getRepos(params)
  // },
  getRepos(params = {}) {
    const language = params.language || 'javascript'
    const query = params.query || 'react'
    const q = `${query}+language:${language}`
    const data = Object.assign({
      q,
    }, params)

    wx.showLoading()
    wx.request({
      url: `https://api.github.com/search/repositories`,
      data,
      success: (res) => {
        console.log(res)

        wx.hideLoading()

        this.setData({
          repos: res.data.items.map((n) => Object.assign({}, n, {
            date: n.created_at.substr(0, 7),
          })),
        })
      },
    })
  },
  onOpen(e) {
    this.setData({
      pageStyle: 'height: 100%; overflow: hidden',
    })
  },
  onClose(e) {
    this.setData({
      pageStyle: '',
    })
  },
})