const Discord = require("discord.js");
const client = new Discord.Client();

const commands = require("./commands")(client);

var isOnline = false;

client.on("ready", () => {
  console.log(`DISCORD: Logged in as ${client.user.tag}`);
});

module.exports.login = () => {
  return new Promise((resolve, reject) => {
    console.log("Enabling Discord bot.");
    client
      .login(process.env.DISCORD_BOT_TOKEN)
      .then(() => {
        isOnline = true;
        resolve();
      })
      .catch((err) => reject(new Error(err)));
  });
};

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
