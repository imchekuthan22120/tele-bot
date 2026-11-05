/*CMD
  command: 👍 Likes
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Services

  <<ANSWER
*🔰 Send Post LinkWhere You Want To Get Likes*

*How To calculate Points*

*No Of Likes x 25*
*Eg: 1000x25 = 25,000*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let like = User.getProperty("like")
User.setProperty("like" , data.message ,"string")
Bot.runCommand("like")
