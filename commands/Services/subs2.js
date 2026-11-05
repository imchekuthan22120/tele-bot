/*CMD
  command: subs2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Services

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
userPayment.add(+message)
  var user_link = Libs.commonLib.getLinkFor(user)
  var withdrawn = Bot.getProperty("totalWithdrawn")
  withdrawn = parseFloat(withdrawn)
  var lib = Libs.ReferralLib
  var refList = lib.currentUser.refList.get()
  var subs = User.getProperty("subs")
  var userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global")
  userPayment.add(+message)
  var balance = Libs.ResourcesLib.userRes("balance")
  if (isNaN(message)) {
    
  } else {
  }
  if (message < 100) {
    Bot.sendMessage("_❌ Minimum Order Is 100 Followers which Costs 6,00,000 points_")
  } else {
    if (message > balance.value()) {
      Bot.sendMessage(
        "_❌ Not Enough Balance_"
      )
    } else {
      var apikey = Bot.getProperty("apikey")
      var amount = message*600
      var url = "https://smmshipper.in/api/v2?key="+apikey+"&action=add&service=1&link="+follow+"&quantity="+message+""

HTTP.get({
  url: url,
  success: "/onSuccess"
  })
      balance.add(-amount)
      Api.sendMessage({
        chat_id: "@zecosmm_support",
        text:
          "*📄 New Order Submitted  \n\n✅ Status = Done\n🆔 User ID = " +
          user.telegramid +
          "\n👁️‍🗨️ Amount = " +
         message +
          " Followers\n\n🔗 Username =\n " +
          subs+
          "\n\n👮🏻‍♂ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown",
        disable_web_page_preview: true
     })
    }
  }

