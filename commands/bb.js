/*CMD
  command: bb
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if ((user.telegramid == 5407926568)) {
var balance = Libs.ResourcesLib.anotherUserRes("balance", user.telegramid)
//balance.add((parseInt(message))
Bot.sendMessage("*"+balance.value().toFixed(2)+" Points*")
} else {
  Bot.sendMessage("*You're not the admin*")
}
