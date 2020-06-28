// import Vue from "vue"
// import VueRouter from "vue-router"

// Vue.use(VueRouter)
const defaultTitle = "旅途与画"

export default new VueRouter({
  mode: "history",
  linkExactActiveClass:'active',
  routes: [
    {
      path: "*",
      component: () => import("./views/404"),
      meta: {
        title: "404—你迷路了",
        keepAlive: true
      }
    },
    {
      path: "/",
      name: "Home",
      component: () => import("./views/Home"),

      meta: {
        title: defaultTitle,
        keepAlive: true
      }
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "About" */ "./views/About"),
      meta: {
        title: "关于我-"+defaultTitle,
        keepAlive: true
      }
    },
    {
      path: "/archive",
      name: "Archive",
      component: () => import(/* webpackChunkName: "Archive" */ "./views/Archive"),
      meta: {
        title: "文章归档-"+defaultTitle,
        keepAlive: true
      }
    },
    {
      path: "/label",
      name: "Label",
      component: () => import(/* webpackChunkName: "Archive" */ "./views/Label"),
      meta: {
        title: "文章标签-"+defaultTitle,
        keepAlive: true
      }
    },
    {
      path: "/mood",
      name: "Mood",
      component: () => import(/* webpackChunkName: "Archive" */ "./views/Mood"),
      meta: {
        title: "悟言-"+defaultTitle,
        keepAlive: true
      }
    },
    {
      path: "/friend",
      name: "Friend",
      component: () => import(/* webpackChunkName: "Friend" */ "./views/Friend"),
      meta: {
        title: "知交-"+defaultTitle,
        keepAlive: true
      }
    },
    {
      path: "/category",
      name: "Category",
      component: () => import(/* webpackChunkName: "Category" */ "./views/Category"),
      meta: {
        title: "文章分类-"+defaultTitle,
        keepAlive: true
      }
    },
    {
      path: "/detail/:number",
      name: "ArticleDetail",
      component: () => import(/* webpackChunkName: "ArticleDetail" */ "./views/ArticleDetail"),
      meta: {
        title: "文章详情-"+defaultTitle,
        keepAlive: false
      }
    },
    {
      path: "/photo",
      name: "Photo",
      component: () => import(/* webpackChunkName: "ArticleDetail" */ "./views/Photo"),
      meta: {
        title: "相册-"+defaultTitle,
        keepAlive: false
      }
    }
  ],
  scrollBehavior: (to, from, savedPosition) => {
    return {
      x: 0,
      y: 0
    }
  }
})