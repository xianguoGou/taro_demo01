export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/index',
  ],
  subPackages: [
    {
      root: "packageA/pages",
      name: "packageTest",
      pages: [
        "testA/index",
        "testB/index"
      ],
      "independent": true
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
      },
    ],
  },
})
