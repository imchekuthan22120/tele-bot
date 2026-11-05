/*CMD
  command: like
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
if (balance.value() < 250){
Bot.sendMessage("_❌ You have to own at least 250 Points For 10 Likes_")
}else{
Bot.sendMessage("*👁️‍🗨️ Enter Amount Of Likes you Need\n\nIf You Want 10 =  250\n\n100 Like 👍 = 2500 Points\n\nHow Calculate Points\nNo of views x 25\nEg:1000 x 25 = 25,000 points*")
Bot.runCommand("like2")
}
