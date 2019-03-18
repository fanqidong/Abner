/*
 * @LastEditors: Abner.fanqidong
 * @Github: https://github.com/fanqidong
 * @description: 博客全局配置
 * @Date: 2019-02-27 14:19:22
 * @LastEditTime: 2019-03-18 14:58:56
 */
export default {
    title: '樊启东的私人space',
    // 博客仓库Api地址
    blog: 'https://api.github.com/repos/fanqidong/blog-backstage',
    // 位于github个人账号设置->开发者设置->个人token 
    token:['3c463e156d140a6c11707','c25c1b6c7be453eaeb0'],
    // 创建者
    creator:'fanqidong',
    /**
     * leancloud 配置【文章阅读量】
     */
    leancloud:{
        appId:'sJRaApO77xsR8cgUE3UELNUV-gzGzoHsz',
        appKey:'nAuMqrs9MEIdVWjM85oGeDa9'
    },
    // 页面导航配置
    menuList: [
        {
          id: 0,
          path: "/",
          icon: "shouye",
          text: "首页"
        },
        {
          id: 1,
          path: "/archive",
          icon: "guidangxiangmu",
          text: "归档"
        },
        {
          id: 2,
          path: "/label",
          icon: "biaoqian",
          text: "标签"
        },
        {
          id: 3,
          path: "/category",
          icon: "fenlei",
          text: "分类"
        },
        {
          id: 4,
          path: "/about",
          icon: "guanyu",
          text: "关于"
        },
        {
          id: 5,
          path: "/friend",
          icon: "pengyouquan",
          text: "知交"
        },
        {
          id: 6,
          path: "/mood",
          icon: "pengyouquan",
          text: "悟言"
        }
      ]
 }