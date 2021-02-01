# UTHD Gaming
Giving streamers more options to interact with their viewers, live.

### To Install:
NOTE: This is not needed nor intended to be installed by streamers who wish to use the platform. If you want to use this for yourself, please sign up on our hosted instance at https://play.uthd.dev

If you are a developer and would like to run this platform as a learning tool, follow the steps below

1. Clone this repo `git clone`
2. Install dependencies `npm install`
3. Setup Env. vars: `NODE_ENV, dbConnUrl, hostUrl, PORT, twitchClientId, twitchClientSecret, DISCORD_BOT_TOKEN, DISCORD_BOT_PREFIX`
   - Create a .env file (NEVER COMMIT/UPLOAD THIS FILE) or
   - Declare them in your web host (Encrypt the values you wish to protect)
   
         NODE_ENV: Standard NODE_ENV env var, use `production` to use next.js pre-rendered pages & optimizations, defaults to using next.js dev mode with hot-reload & page gen

         dbConnUrl: should be a valid credentials & DB incl. MongoDB Connection URL

         twitchClientCredentials: From Twitch Dev Application

         hostUrl: URL of host eg. http://localhost:3000, make sure that whatever this url is, with /auth/twitch/callback, is added to the authorized callbacks in your Twitch Application Settings

         PORT: Port to run the web server on, WebSockets are run on the same port

         DISCORD_BOT_TOKEN: Bot Token from Discord Dev Application

         DISCORD_BOT_PREFIX: Prefix for Discord Bot Commands

4. Build & Pre-render the frontend with Next.JS `npm run build`
5. Start the application `npm run start`
6. *(Optional)* To access the dashboard and start the discord bot, change the field `role` for your user, in the `users` collection of your MongoDB database to `admin`
*NOTE: Your user only gets created in the DB after you've logged in at least once*
---

## Contact
Hi, my name's Aubin, I'm 15 and a sophomore in High School. I'm a self-taught developer with background in,
Java, HTML, & CSS but am most proficient in Javascript.

If you'd like to reach out, feel free to e-mail me at aubin@uthd.dev or join my discord: https://discord.gg/g3MXN49jNQ


## Follow Me:
If you want to see where this project will end up being used be sure to follow my progress as a streamer & content creator.
You don't want to miss what's right around the corner...

*Twitch:* https://ttv.uthd.dev -- *YouTube:* https://yt.uthd.dev
