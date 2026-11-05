/*CMD
  command: follow
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
if (balance.value() < 3000){
Bot.sendMessage("_❌ You have to own at least 3000 Points For 10 Followers_")
}else{
Bot.sendMessage("*👁️‍🗨️ Enter Amount Of followers You Need\n\nMinimum order is 10 which costs 3000\n\n Point Calulation\nNo of followers need x 300\nEg: 10x300=3000*")
Bot.runCommand("follow2")
}
