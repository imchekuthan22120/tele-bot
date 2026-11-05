/*CMD
  command: Rem
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: enter the user id and amount

  <<KEYBOARD

  KEYBOARD
  aliases: rem
  group: 
CMD*/

// Expecting the user to provide the target user ID and the amount in the message
var messageParts = message.split(" ");  // Split the message by spaces
var targetUserId = parseInt(messageParts[0]);  // The first part should be the target user ID
var amountToAdd = parseInt(messageParts[1]);  // The second part should be the amount to add

if (user.telegramid == 5407926568) {  // Only the admin (your ID) can execute this command
    if (!isNaN(targetUserId) && !isNaN(amountToAdd)) {  // Ensure the inputs are numbers
        var balance = Libs.ResourcesLib.anotherUserRes("balance", targetUserId);  // Get the target user's balance
        balance.add(-amountToAdd);  // Add the specified amount
        Bot.sendMessage("Successfully removed " + amountToAdd + " balance to user " + targetUserId);
    } else {
        Bot.sendMessage("Invalid input. Please provide a valid user ID and amount.");
    }
} else {
    Bot.sendMessage("*You're not the admin*");
}

