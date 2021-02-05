const Discord = require("discord.js");
const client = new Discord.Client();

const commands = require("./commands")(client);

var isOnline = false;

module.exports.login = () => {
  return new Promise((resolve, reject) => {
    console.log("DISCORD: Logging in...");
    client
      .login(process.env.DISCORD_BOT_TOKEN)
      .then(isOnline = true)
      .catch((err) => reject(new Error(err)));
      client.on("ready", () => {
        console.log(`DISCORD: Logged in as ${client.user.tag}`);
        resolve();
      });
    });
}

module.exports.logout = () => {
  return new Promise((resolve, reject) => {
    try {
      client.destroy();
      isOnline = false;
      resolve();
    } catch (err) {
      reject(new Error(err));
    }
  });
};

module.exports.isOnline = () => {
  return isOnline;
};
