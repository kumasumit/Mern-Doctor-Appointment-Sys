const express = require('express');

//router object
const router = express.Router();
//routes
router.use('/user', require('./userRoute'))

module.exports = router;