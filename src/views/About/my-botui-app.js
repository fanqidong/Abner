import Vue from "vue"
import BotUI from "botui"
import "../../../node_modules/botui/build/botui.min.css"
import "../../../node_modules/botui/build/botui-theme-default.css"

export default function initBotApp() {
    let botui = BotUI("my-botui-app", {
        vue: Vue
    })
    botui.message.add({
            delay: 500,
            content: 'Hello！你终于来了👋👋👋'
        }).then(function () {
            botui.message.add({
                delay: 1000,
                content: '想深入了解我吗？😉'
            })
        }).then(function () {
            return botui.action.button({
                delay: 2000,
                action: [{
                        text: "点击查看我的小秘密 😏",
                        value: "yes"
                    },
                    {
                        text: "泥奏凯 😒",
                        value: "no"
                    }
                ]
            })
        })
        .then(function (res) {
            if (res.value == "yes") {
                showPersonInfo()
            } else {
                botui.message.bot("没爱了。。。😭😭😭").then(function () {
                    botui.message.add({
                        delay: 1000,
                        content: '后悔了？那我大发慈悲再给你一次机会吧！😁'
                    })
                    botui.message.add({
                        delay: 2000,
                        content: '点击下面按钮重新来过'
                    })
                })
            }
        })

    var showPersonInfo = function () {
        botui.message.bot({
                delay: 400,
                content: "我叫樊启东，经常被叫成（范启东）😂 "
            })
            .then(function () {
                botui.message.add({
                    delay: 800,
                    content: '来自湖北黄石，梦想是环游世界。✈️ 🌏'
                })
                return botui.message.bot({
                    delay: 1500,
                    content: "目前是一枚前端攻城狮，热爱编程，热爱生活。❤️"
                })
            })
            .then(function () {
                return botui.action.button({
                    delay: 800,
                    action: [{
                        icon: "plus",
                        text: "还有小秘密哦！",
                        value: "yes"
                    }]
                })
            }).then(function (res) {
                botui.message.bot({
                    delay: 500,
                    content: "你知道的已经够多多多了！😎😎😎"
                })
                botui.message.bot({
                    delay: 1000,
                    content: "enjoy我的博客内容吧？(手动笔芯)😘"
                })
            })
    }
}