/*
 * @LastEditors: Abner.fanqidong
 * @Github: https://github.com/fanqidong
 * @description: 博客全局配置
 * @Date: 2019-02-27 14:19:22
 * @LastEditTime: 2019-04-12 16:50:11
 */
export default {
    title: '旅途与画',
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
    /**
     * 页面导航配置
     */
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
    /**
     * 个人联系方式配置
     */
    socailLink: [{
            id: 1,
            icon: 'github',
            link: 'https://github.com/fanqidong',
            name: '大型交友平台'
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
            name: '要给我发邮件吗？'
        },
        {
            id: 4,
            icon: 'zhihu',
            link: 'https://www.zhihu.com/people/fan-qi-dong-57/activities',
            name: 'X乎'
        },
        {
            id: 5,
            icon: 'juejin',
            link: 'https://juejin.im/user/5bec34d36fb9a049fb433716',
            name: '掘金'
        },
        {
            id: 6,
            icon: 'jianshu',
            link: 'https://www.jianshu.com/u/5fb7db0c23ca',
            name: '简书'
        }
    ],
    /** 
     * 页面配置
     */
    //    归档页
    archive: {
        openComment: false,
        cover: 'http://s.doyo.cn/img/59/36/17429e9e788978000010.jpg',
        keyword: '归档丨archive'
    },
    //    分类页
    category: {
        openComment: false,
        cover: 'https://view.moezx.cc/images/2018/03/09/8972361.jpg',
        keyword: '分类丨category'
    },
    //    标签页
    label: {
        openComment: false,
        cover: 'https://view.moezx.cc/images/2018/06/04/01-49.jpg',
        keyword: '标签丨label'
    },
    //    关于页
    about: {
        openComment: true
    },
    //    友链页
    friend: {
        openComment: true,
        cover: 'https://i.loli.net/2018/12/09/5c0cc1e157dc6.jpg',
        keyword: '友链丨friend'
    },
    //     心情页
    mood: {
        openComment: true,
        cover: 'https://view.moezx.cc/images/2019/04/14/1406111060947.jpg',
        keyword: '心情丨mood'
    },
    //     文章详情页
    articleDetail: {
        openComment: true
    },
    /**
     * 音乐播放器 列表配置
     */
    musicList: [{
            name: '东西（Cover：林俊呈）',
            artist: '纳豆',
            url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
            cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
            lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
        },
        {
            name: '响喜乱舞（Cover：MARiA）',
            artist: '泠鸢yousa',
            url: 'https://cdn.moefe.org/music/mp3/kyoukiranbu.mp3',
            cover: 'https://p1.music.126.net/AUGVPQ_rVrngDH9ocQrn3Q==/109951163613037822.jpg?param=300y300', // prettier-ignore
            lrc: 'https://cdn.moefe.org/music/lrc/kyoukiranbu.lrc',
        },
        {
            name: '啵唧',
            artist: 'Hanser',
            url: 'https://cdn.moefe.org/music/mp3/kiss.mp3',
            cover: 'https://p1.music.126.net/K0-IPcIQ9QFvA0jXTBqoWQ==/109951163636756693.jpg?param=300y300', // prettier-ignore
            lrc: 'https://cdn.moefe.org/music/lrc/kiss.lrc',
        }
    ],
    isDev: window.location.href.includes('localhost')
}