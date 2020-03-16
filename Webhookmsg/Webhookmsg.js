webhooklink = "" // Put your webhook link inside the quotes


const readline = require('readline');
const webhook = require('discord-webhook-node');
const hook = new webhook.Webhook(webhooklink);
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
async function repeat() { 
  if (webhooklink == "") {
    console.log("Please put your webhook link on the script and try again")
  }
  else {
    rl.question('Write a message to send: ', (msg) => {
    hook.send(msg)
        .then(() => console.log(`msg sent: ${msg}`))
        .catch(err => console.log("Please verify the webhook link and try again"));
    setTimeout(repeat, 1000)
    });
  }
}
  
repeat();