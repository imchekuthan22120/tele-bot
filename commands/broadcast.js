/*CMD
  command: broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Send Message For Broadcast*

  <<KEYBOARD

  KEYBOARD
  aliases: bd
  group: 
CMD*/

/*if (user.telegramid == 5407926568) {  // Check if the sender is the admin
    let users = Bot.getProperty("usersList");

    if (!users || users.length === 0) {
        Bot.sendMessage("No users found.");
        return;
    }

    for (var i = 0; i < users.length; i++) {
        Bot.sendMessageToChatWithId(users[i], message);
    }

    Bot.sendMessage("*Done*");
    
} else {  
    Bot.sendMessage("*You're not the admin*");
}*/

if (user.telegramid != 5407926568) {
  Bot.sendMessage("You're not the admin.");
  return;
}

let users = Bot.getProperty("usersList", []);
if (!users || users.length == 0) {
  Bot.sendMessage("No users found.");
  return;
}

let caption = request.caption || request.text || "";
let fileId = null;
let type = "text";

// Detect message type
if (request.photo) {
  type = "photo";
  fileId = request.photo[request.photo.length - 1].file_id;
} 
else if (request.video) {
  type = "video";
  fileId = request.video.file_id;
}
else if (request.text) {
  type = "text";
}

// Loop through users & send
var sent = 0;
var fail = 0;

for (var i = 0; i < users.length; i++) {
  try {
    let chatId = users[i];

    if (type == "text") {
      Api.sendMessage({
        chat_id: chatId,
        text: caption
      });
    }

    else if (type == "photo") {
      Api.sendPhoto({
        chat_id: chatId,
        photo: fileId,
        caption: caption
      });
    }

    else if (type == "video") {
      Api.sendVideo({
        chat_id: chatId,
        video: fileId,
        caption: caption
      });
    }

    sent++;

  } catch (e) {
    fail++;
  }
}

Bot.sendMessage(
  "*Broadcast Finished*\n\nSent: " + sent + "\nFailed: " + fail
);

