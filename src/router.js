import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "Home",
            component: () => import('./views/Home')
        },
        {
            path: "/about",
            name: "About",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import( /* webpackChunkName: "About" */ "./views/About")
        },
        {
            path: "/archive",
            name: "Archive",
            component: () => import( /* webpackChunkName: "Archive" */ './views/Archive')
        },
        {
            path: "/label",
            name: "Label",
            component: () => import( /* webpackChunkName: "Archive" */ './views/Label')
        },
        {
            path: "/mood",
            name: "Mood",
            component: () => import( /* webpackChunkName: "Archive" */ './views/Mood')
        },
        {
            path: "/friend",
            name: "Friend",
            component: () => import( /* webpackChunkName: "Friend" */ './views/Friend')
        },
        {
            path: "/category",
            name: "Category",
            component: () => import( /* webpackChunkName: "Category" */ './views/Category')
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
});