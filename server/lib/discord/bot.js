const Discord = require('discord.js')
const client = new Discord.Client();
const ws = require('../fontendWS/socketServer');
var isOnline = false;

client.on('ready', () => {
    console.log(`DISCORD: Logged in as ${client.user.tag}`);
})

module.exports.login = () => {
    console.log('Enabling Discord bot.')
    client.login(process.env.DISCORD_BOT_TOKEN)
    .then(() => {
        isOnline = true;
        ws.emitAdminStats();
    })
    .catch(err => console.log(err));
}

module.exports.logout = () => {
    client.destroy()
    isOnline = false;
    ws.emitAdminStats();
}

module.exports.isOnline = () => {
    return isOnline
}