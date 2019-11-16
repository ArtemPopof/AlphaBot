var mineflayer = require('mineflayer');
var bot = mineflayer.createBot({
  host: "localhost", // optional
  port: 52296,       // optional
  username: "Andrew", // email and password are required only for
  version: false                 // false corresponds to auto version detection (that's the default), put for example "1.8.8" if you need a specific version
});

const lowerCaseName = bot.username.toLowerCase()

bot.on('chat', function(username, message) {
  if (message.toLowerCase().startsWith(lowerCaseName)) {
      bot.chat("Can't understand you!")
  }
});
bot.on('error', err => console.log(err))