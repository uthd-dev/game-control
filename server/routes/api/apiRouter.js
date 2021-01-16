const express = require("express");
const router = express.Router();
router.use(express.urlencoded());

const usersApi = require('./userApi');
const mcApi = require('./mcApi');

/* Router */
router.use('/users', usersApi);
router.use('/mc', mcApi);

module.exports = router;