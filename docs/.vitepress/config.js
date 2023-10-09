export default {
  title: "kittyui", //站点标题
  description: "一个vue3组件库", //mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "Kitty",
    logo: "/logo.log",
    nav: [
      { text: "博客", link: "/articles/组件库环境搭建" },
      { text: "Guide", link: "/guide/" },
      { text: "GuideTest", link: "/guide/test" },
      { text: "gitee", link: "https://gitee.com/geeksdidi" },
      {
        text: "Drop Menu",
        items: [
          {
            items: [
              { text: "Item A1", link: "/item-A1" },
              { text: "Item A2", link: "/item-A2" },
            ],
          },
          {
            items: [
              { text: "Item B1", link: "/item-B1" },
              { text: "Item B2", link: "/item-B2" },
            ],
          },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://gitee.com/geeksdidi" }],
    sidebar: {
      "/articles/": [
        {
          text: "组件库源码实现",
          collapsible: true,
          collapsed:true,
          items: [
            {
              text: "组件库环境搭建",
              link: "/articles/组件库环境搭建",
            },
            { text: "gulp的使用", link: "/articles/gulp的使用" },
          ],
        },
        {
          text: "vue教程",
          collapsible: true,
          collapsed:true,
          items: [
            {
              text: "pina和vuex",
              link: "/articles/pina和vuex",
            },
          ],
        },
      ],
    },

  },
}
