/*CMD
  command: 👨‍👨‍👦‍👦 Subscribers
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Services
  answer: *🔰 Send Your YouTube Channel Link Where You Want To Get Subscribers*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let Link = User.getProperty("subs")
User.setProperty("subs" , data.message ,"string")
Bot.runCommand("subs")
