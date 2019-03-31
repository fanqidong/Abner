/*
 * @LastEditors: Abner.fanqidong
 * @Github: https://github.com/fanqidong
 * @description: 博客全局配置
 * @Date: 2019-02-27 14:19:22
 * @LastEditTime: 2019-03-28 12:56:55
 */
export default {
    title: '樊启东的私人space',
    // 博客仓库Api地址
    blog: 'https://api.github.com/repos/fanqidong/blog-backstage',
    // 位于github个人账号设置->开发者设置->个人token 
    token: ['3c463e156d140a6c11707', 'c25c1b6c7be453eaeb0'],
    // 创建者
    creator: 'fanqidong',
    /**
     * leancloud 配置【文章阅读量】
     */
    leancloud: {
        appId: 'sJRaApO77xsR8cgUE3UELNUV-gzGzoHsz',
        appKey: 'nAuMqrs9MEIdVWjM85oGeDa9'
    },
    // lemon-loading 页面局部加载loading
    loading: '../assets/img/lemon-loading.svg',
    // 页面导航配置
    menuList: [{
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
            path: "/category",
            icon: "fenlei",
            text: "分类"
        },
        {
            id: 3,
            path: "/label",
            icon: "biaoqian",
            text: "标签"
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
            icon: "shuoshuo",
            text: "悟言"
        }
    ],
    // 个人联系方式配置
    socailLink: [{
            id: 1,
            icon: 'github',
            link: 'https://github.com/fanqidong',
            name:'github'
        }, {
            id: 2,
            icon: 'weibo',
            link: 'https://weibo.com/u/5185983416',
            name: 'weibo'
        },
        {
            id: 3,
            icon: 'youxiang',
            link: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=Z1ZTVVJTVFNTVlQnFhZJBAgK',
            name: 'QQ邮箱'
        },
        {
            id: 4,
            icon: 'zhihu',
            link: 'https://www.zhihu.com/people/fan-qi-dong-57/activities',
            name: '知乎'
        },
        {
            id: 5,
            icon: 'juejin',
            link: 'https://juejin.im/user/5bec34d36fb9a049fb433716',
            name: '掘金'
        },
    ],
    /**
     * 音乐播放器 列表配置
     */
    musicList:[{
        title: '水星记',
        artist: '郭顶',
        src: 'http://m701.music.126.net/20190331222510/552e13a87fbdf8a916069c5db618d703/jdyyaac/0259/050c/045c/5340c51cd82fe3a5fa0e36708c7b92f5.m4a'
      },
      {
        title: '天亮以后说再见',
        artist: '曲肖冰',
        src: 'http://m801.music.126.net/20190331220430/9ea2072a92b86af9c04c4456c30b7869/jdyyaac/555c/0359/0753/b6994eea92432431accb0921a0ced83e.m4a'
      }]
}
