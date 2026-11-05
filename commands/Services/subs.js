/*CMD
  command: subs
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
if (balance.value() < 600000){
Bot.sendMessage("_❌ You have to own at least 6,00,000 Points For 100 Followers_")
}else{
Bot.sendMessage("*👁️‍🗨️ Enter Amount Of Subscribers You Need\n\nMinimum order is 100 which costs 6,00,000\n\n Point Calulation\nNo of subscribers need x 600\nEg: 100x600=6,00,000")
Bot.runCommand("subs2")
}
