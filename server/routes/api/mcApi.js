const express = require("express");
const router = express.Router();
const mcActionsDB = require('../../lib/db/mcActionsSchema');
const mcApi = require('../../lib/rcon/minecraftApi');

const connectEnsureLogin = require('connect-ensure-login');

const init = () => {

}

router.get('/actions', connectEnsureLogin.ensureLoggedIn('/auth/twitch'), (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        thisIs: "Not set up yet."
    });
});

router.post('/actions/:actionId', (req, res) => {
    switch (req.params.actionId){
        case "enchant":
            mcApi.enchantHeldItem("knockback", "4", "UTHD");
            break;
        case "heal-player":
            mcApi.healPlayer("UTHD");
            break;
        case "give-item":
            mcApi.givePlayerItem("stone_axe", "UTHD");
            break;
        case "good-potion":
            mcApi.givePlayerPotionEffect("speed", "2", "120", "UTHD");
            break;
        case "bad-potion":
            mcApi.givePlayerPotionEffect("poison", "2", "20", "UTHD");
            break;
        case "clear-inv":
            mcApi.clearInvOfPlayer("UTHD");
            break;
        case "summon-mob":
            mcApi.summonMob("creeper", "UTHD");
            break;
    }
    res.end('OK 200');
});

exports.init = init;
module.exports = router;