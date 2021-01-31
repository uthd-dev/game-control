/* IMPORT MODULES */
var Rcon = require("rcon");

/* CONNECTION PROPERTIES */
const host = process.env.rconHost;
const port = process.env.rconPort;
const pw = process.env.rconPwd;

var conn = new Rcon(host, port, pw);
var connActive = false;

/* EVENT HANDLER */
conn
  .on("auth", function () {
    console.log(`Connected successfully to ${host}:${port}!`);
    connActive = true;
    conn.send("list");
  })
  .on("response", function (str) {
    console.log("Got response: " + str);
  })
  .on("end", function () {
    console.log(`Connection to ${host} closed!`);
    process.exit();
  })
  .on("error", function (err) {
    console.log(`RCON: ${err}`);
    connActive = false;
    console.log(`Reconnecting to RCON in 15 seconds...`);
    setTimeout(() => {
      conn.connect();
    }, 15000);
  });

//EXPORT
module.exports = conn;
