/*CMD
  command: 👥 Affiliate Earn
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER
For Each Referral You Get Arround 25 - 100 Points...!
Enjoy Earning Money With Zeco
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let link = Libs.ReferralLib.getRefLink("zecosmm_bot", "ref");
Bot.sendMessage("Here is your referral link: " + link, { parse_mode: "" });

