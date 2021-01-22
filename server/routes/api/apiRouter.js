const express = require("express");
const router = express.Router();
router.use(express.urlencoded());

const usersApi = require('./userApi');
const mcApi = require('./mcApi');
const streamerApi = require('./streamerApi');

/* Router */
router.use('/users', usersApi);
router.use('/mc', mcApi);
router.use('/streamers', streamerApi);

module.exports = router;