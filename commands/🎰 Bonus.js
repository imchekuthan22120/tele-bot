/*CMD
  command: 🎰 Bonus
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

function canRun(){
  var last_run_at = User.getProperty("last_run_at");
  if(!last_run_at){ return true }
  
  var minutes = (Date.now() - last_run_at) /1000/60;
  
 var minutes_in_day = 24 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*📛 You have already received a bonus Today\n\n▶️ Come Back After ⏳ "+wait_hours+" h "+wait_minutes+" m " 
 + seconds+ " s*" );
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("last_run_at", Date.now(), "integer");

let bonus = Libs.Random.randomInt(1,10)
let balance = Libs.ResourcesLib.userRes("balance");
balance.add(+bonus)
Bot.sendMessage(
  "*🎉 Congratulation , you Received "+bonus+" Points*"
)
Api.sendMessage({
        chat_id: "@zecosmm_support",
        text:
          "*🎉 New User Claimed Bonus 🎉  \n\n🆔 User ID = " +
          user.telegramid +
          "\n👁️‍🗨️ Amount = "+bonus+" Points\n\n👮🏻‍♂ Bot = @" +
          bot.name +
          "*",
        parse_mode: "Markdown",
        disable_web_page_preview: true
     })
