/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var use = Libs.ResourcesLib.anotherChatRes("use", "global")
use.add(1)

var button = [[{title:"Public Channel",url:"https://t.me/zecosmm_support"}]]


Bot.sendInlineKeyboard(button,"💡 You Must Join Our All Channels To Get Payment")
Bot.sendKeyboard("✅ Joined","After Join All Channels Click the ✅ Joined Button")
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink(){
  Bot.sendMessage("You click on yours own link!");
}

function doAttracted(refUser){
  Bot.sendMessage(
    "Hello" + 
    "\n\n" +
    "You attracted by user: " + Libs.commonLib.getLinkFor(refUser));
  
  Bot.sendMessageToChatWithId(
    refUser.telegramid,
    "You just attract new user: " + Libs.commonLib.getLinkFor(user)
  );
}

function doAlreadyAttracted(){
  Bot.sendMessage("You was already attracted");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAlreadyAttracted: doAlreadyAttracted,
  debug: false // extra info for debugging
}

RefLib.track(trackOptions);

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
var welco = User.getProperty("welco")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
  Bot.sendMessageToChatWithId(5407926568,
    "*👨🏻‍✈️New User🆕*\n\n*🤴🏻User = "+user.first_name+"\n\n👮🏻‍♂Username =* " +
      user_link +
      " \n\n*💳User Id =* " +
      user.telegramid +
      ""
  )
}

Api.sendMessage({
        chat_id: "@welcometo_channel",
        text:
         "*👨🏻‍✈️New User🆕*\n\n*🤴🏻User = " + user.first_name + " " + user.last_name + "\n\n👮🏻‍♂Username =* " +
    user.username +
    " \n\n*💳User Id =* " +
    user.telegramid +
    "",
        parse_mode: "Markdown",
        disable_web_page_preview: true
     })
    
    
let users = Bot.getProperty("usersList", []);

// Add user only if not already in the list
if (users.indexOf(user.telegramid) === -1) {
    users.push(user.telegramid);
    Bot.setProperty("usersList", users, "json");
}



User.setProperty("welco", user.telegramid, "text")
