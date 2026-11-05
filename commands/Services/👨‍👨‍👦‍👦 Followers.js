/*CMD
  command: 👨‍👨‍👦‍👦 Followers
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Services

  <<ANSWER
*🔰 Send Insta Username Where You Want To Get Followers*

*How To calculate Points*

*No Of Followers x 300*
*Eg: 1000x300 = 3,00,000*

⚠️*Discription*

*🔴 𝗧𝘂𝗿𝗻 𝗢𝗳𝗳 𝗙𝗹𝗮𝗴 𝗙𝗼𝗿 𝗥𝗲𝘃𝗶𝗲𝘄 𝗠𝘂𝘀𝘁!!*

*Start : Instant*
*Speed : 200k/ days*
*Drop : Non~Drop*
*Refill : 365 Days Refill ♻️*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let Link = User.getProperty("follow")
User.setProperty("follow" , data.message ,"string")
Bot.runCommand("follow")
