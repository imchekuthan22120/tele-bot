/*CMD
  command: views
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

let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
if (balance.value() < 1700){
Bot.sendMessage("_❌ You have to own at least 1700 Points For 100 views_")
}else{
Bot.sendMessage("*👁️‍🗨️ Enter Amount Of Views you Need\n\nMinimum order is 100\nPoint calculation\nNo of views need x 17 = no of points needed\n eg: 100x17=1700*")
Bot.runCommand("views2")
}
