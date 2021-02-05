const { ApiClient } = require("twitch");
const { ClientCredentialsAuthProvider } = require("twitch-auth");

const clientId = process.env.twitchClientId;
const clientSecret = process.env.twitchClientSecret;
const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({ authProvider });

exports.isStreamerLive = (twitchId) => {
  new Promise((resolve, reject) => {
    apiClient.helix.users
      .getUserById(twitchId)
      .then((user) => {
        if (user) resolve(true);
        else resolve(false);
      })
      .catch((err) => reject(new Error(err)));
  });
};
