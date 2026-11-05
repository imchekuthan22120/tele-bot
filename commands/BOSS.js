/*CMD
  command: BOSS
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🔙 back
  group: 
CMD*/



// Store basic user info
User.setProperty("first_name", user.first_name, "string");
User.setProperty("username", user.username, "string");
User.setProperty("user_id", user.telegramid, "integer");

var userstat = User.getProperty("status");

// If user has left, restart the flow
if (userstat == "left") {
  Bot.runCommand("/start");
  return;
}

// Handle referral bonus
var referbonus = User.getProperty("referbonus");
if (referbonus == undefined) {
  let refUser = Libs.ReferralLib.currentUser.attractedByUser();
  if (refUser) {
    let bonusref = Libs.Random.randomInt(25, 50, 75, 100);
    var balanceref = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
    balanceref.add(bonusref);
    Bot.sendMessageToChatWithId(refUser.chatId, "*🎉 Congratulations, you received " + bonusref + " for inviting your friend ☑️*");
    User.setProperty("referbonus", user.telegramid, "integer");
  }
}

// Load user resources
var balance = Libs.ResourcesLib.userRes("balance");
var withdrawn = Libs.ResourcesLib.userRes("withdrawn");
var ref = Libs.ResourcesLib.userRes("referral");

// Delete old message if exists
var msgid = User.getProperty("msgid");
Libs.commonLib.getLinkFor(user);
Api.deleteMessage({ message_id: msgid });

// Show full keyboard if not in maintenance
Bot.sendKeyboard(
  "🆕 Order,\n👤ID,⚖ Balance,🎰 Bonus,\n📥 Deposit,📞 Help,\n👥 Affiliate Earn,🏆 Top Invites\nPoint Help",
  "*Hello Sir 👋*\n\n_🙌 Welcome To Telegram's Fastest & Zeco SMM Panel Bot._\n\nBest SMM Bot For Your Instagram Booster"
);

