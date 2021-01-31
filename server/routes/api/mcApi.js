const express = require("express");
const router = express.Router();
const mcActionsDB = require("../../lib/db/schema/mcActionsSchema");
const mcApi = require("../../lib/mc/minecraftApi");

router.get("/actions", (req, res) => {
  if (req.user) {
    res.setHeader("Content-Type", "application/json");
    res.json({
      thisIs: "Not set up yet.",
    });
  } else req.status(403).end("403 Permission denied.");
});

router.post("/actions/:actionId", (req, res) => {
  if (req.user) {
    switch (req.params.actionId) {
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
    res.status(200).end("OK 200");
  } else res.status(403).end("403 Permission denied.");
});

module.exports = router;
