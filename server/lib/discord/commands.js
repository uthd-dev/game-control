const Discord = require('discord.js');

module.exports = (client) => {
    client.on('message', msg => {
        if(msg.author.bot) return
        if(!msg.content.startsWith(process.env.DISCORD_BOT_PREFIX)) return

        const commandBody = msg.content.slice((process.env.DISCORD_BOT_PREFIX).length);
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();

        if(command == "play") {
            msg.channel.send(defaultEmbed)
            .catch(err => console.log(err));
            msg.delete();
        }
    })

    const defaultEmbed = new Discord.MessageEmbed()
        .setColor('#F0524C')
        .setTitle('Play Untethered')
        .setURL('https://play.uthd.dev')
        .setAuthor('Untethered', 'https://static-cdn.jtvnw.net/jtv_user_pictures/76baa258-c9f9-4979-aae4-f1aca776e002-profile_image-300x300.png', 'https://discord.js.org')
        .setDescription('Mess with your favorite streamers & control their game')
        .setThumbnail('https://play.uthd.dev/home/gaming-minecraft.png')
        .addFields(
            { name: 'Like to watch streamers on Twitch?', value: "Once they're on our platform, they can let you do anything from interacting with their game live, controlling physical objects, to watching them play in-game." },
            { name: '\u200B', value: '\u200B' },
            { name: 'Like to stream on Twitch?', value: "Sign up today to enable a whole new world of viewer interaction and boost user engagement. Why not let your viewers play along with you?" },
            { name: '\u200B', value: '\u200B' },
        )
        .setTimestamp()
        .setFooter('Untethered.dev', 'https://static-cdn.jtvnw.net/jtv_user_pictures/76baa258-c9f9-4979-aae4-f1aca776e002-profile_image-300x300.png');

}

