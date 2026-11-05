/*CMD
  command: 👁‍🗨 Views
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Services

  <<ANSWER
*🔰 Send Insta link Where You Want To Get views*

How To calculate Points

No Of Views x 17
Eg: 1000x17 = 17,000


⚠️*Discription*

🕒Start Time: instant start
🚀Speed: 1M/day
✅Quality: View quality
↗️Refill Period: No Gurantee
🔗Link type: Post or video link
💰API: No discounts
🧧 Button : no cancel button active
================
Service Note:
↗️Added Date:
↗️
📝General Note:
✅ The Mentioned Speed may not be accurate in Update times
✅If you face any delivery Issues Please contact with Order ID
✅Make Sure Your Accounts Are Public Before You Order.
✅ No Refill If You Change your Username Or Make the Account Private You Will Not Get Refills .Atleast 20% need to order for getting refill for big base profiles
✅ By making this order means you fully agree our terms and conditions
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let views = User.getProperty("views")
User.setProperty("views" , data.message ,"string")
Bot.runCommand("views")
