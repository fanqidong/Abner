import Vue from "vue"
import BotUI from "botui"
import "../../../node_modules/botui/build/botui.min.css"
import "../../../node_modules/botui/build/botui-theme-default.css"

export default function initBotApp() {
  let botui = BotUI("my-botui-app", { vue: Vue })
  botui.message
    .bot("Would you like to add a reminder?")
    .then(function() {
      return botui.action.button({
        delay: 1000,
        action: [
          {
            text: "Yep",
            value: "yes"
          },
          {
            text: "Nope!",
            value: "no"
          }
        ]
      })
    })
    .then(function(res) {
      if (res.value == "yes") {
        showReminderInput()
      } else {
        botui.message.bot("Okay.")
      }
    })

  var showReminderInput = function() {
    botui.message
      .bot({
        delay: 500,
        content: "Write your reminder below:"
      })
      .then(function() {
        return botui.action.text({
          delay: 1000,
          action: {
            placeholder: "Buy some milk"
          }
        })
      })
      .then(function(res) {
        botui.message.bot({
          delay: 500,
          content: "reminder added: " + res.value
        })

        return botui.action.button({
          delay: 1000,
          action: [
            {
              icon: "plus",
              text: "add another",
              value: "yes"
            }
          ]
        })
      })
      .then(showReminderInput)
  }
}
