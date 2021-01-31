const conn = require("./rcon");

let onlinePlayers = [];

const summonMob = (mobType, playerName) => {
  conn.send(`gc summon ${mobType} ${playerName}`);
};

const summonLava = (playerName) => {
  conn.send(`gc lava ${playerName}`);
};

const givePlayerItem = (item, playerName) => {
  conn.send(`gc give ${item} ${playerName}`);
};

const enchantHeldItem = (enchantment, enchantmentLvl, playerName) => {
  conn.send(`gc enchant ${enchantment} ${enchantmentLvl} ${playerName}`);
};

const givePlayerPotionEffect = (effect, strength, duration, playerName) => {
  conn.send(`gc potion ${effect} ${strength} ${duration} ${playerName}`);
};

const healPlayer = (playerName) => {
  conn.send(`gc heal ${playerName}`);
};

const clearInvOfPlayer = (playerName) => {
  conn.send(`clear ${playerName}`);
};

const kill = () => {
  conn.send(`kill UTHD`);
};

const getOnlinePlayers = () => {
  conn.send("gc list");
  conn.on("response", (res) => {
    if (res.includes("Online Players: ")) {
    }
  });
};

exports.summonMob = summonMob;
exports.summonLava = summonLava;
exports.givePlayerItem = givePlayerItem;
exports.enchantHeldItem = enchantHeldItem;
exports.getOnlinePlayer = getOnlinePlayers;
exports.healPlayer = healPlayer;
exports.givePlayerPotionEffect = givePlayerPotionEffect;
exports.clearInvOfPlayer = clearInvOfPlayer;
exports.kill = kill;
