const conn = require('./rcon');

const summonMob = (mobType, playerName) => {
    conn.send(`gc summon ${mobType} ${playerName}`);
}

const summonLava = (playerName) => {
    conn.send(`gc lava ${playerName}`);
}

const givePlayerItem = (item, playerName) => {
    conn.send(`gc give ${item} ${playerName}`);
}

const kill = () => {
    conn.send(`kill UTHD`);
}

exports.summonMob = summonMob;
exports.summonLava = summonLava;
exports.givePlayerItem = givePlayerItem;
exports.kill = kill;