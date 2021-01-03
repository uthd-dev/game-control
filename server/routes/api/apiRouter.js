const express = require("express");
const router = express.Router();
router.use(express.urlencoded());

const usersApi = require('./userApi');

/* Router */
router.use('/users', usersApi);

module.exports = router;