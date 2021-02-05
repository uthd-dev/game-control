const express = require("express");
const router = express.Router();
router.use(express.urlencoded());

const usersApi = require("./userApi");
const mcApi = require("./mcApi");
const streamerApi = require("./streamerApi");
const navApi = require("./navApi");
const adminApi = require("./adminApi");

/* Router */
router.use("/users", usersApi);
router.use("/mc", mcApi);
router.use("/streamers", streamerApi);
router.use("/nav", navApi);
router.use("/admin", adminApi);

module.exports = router;
