const { ApiClient } = require('twitch');
const { ClientCredentialsAuthProvider } = require('twitch-auth');

const clientId = process.env.twitchClientId;
const clientSecret = process.env.twitchClientSecret;
const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({ authProvider });

async function isStreamerLive (userName)  {
    const user = await apiClient.helix.users.getUserByName(userName);
    if(!user) {
        return  false;
    }
    return true
}

module.exports.isStreamerLive = isStreamerLive;