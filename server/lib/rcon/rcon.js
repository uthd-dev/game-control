/* IMPORT MODULES */
var Rcon = require('rcon');

/* CONNECTION PROPERTIES */
const host = "127.0.0.1";
const port = 25575;
const pw = "password";

var conn = new Rcon(host, port, pw);
var connActive = false;

/* EVENT HANDLER */
conn.on('auth', function() {
  console.log(`Connected successfully to ${host}:${port}!`);
  connActive = true;
}).on('response', function(str) {
  console.log("Got response: " + str);

}).on('end', function() {
  console.log(`Connection to ${host} closed!`);
  process.exit();

}).on('error', function(err) {
  console.log(`RCON: ${err}`);
  connActive = false;
});

//EXPORT
module.exports = conn;