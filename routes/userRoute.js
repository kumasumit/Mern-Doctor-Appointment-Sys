const express = require('express');
const { loginController, registerController, getUserController } = require('../controllers/userControllers');
const authMiddlewares = require('../middlewares/authMiddlewares');
//router object
const router = express.Router();
//routes
//LOGIN||POST
router.post('/login', loginController);
//Register||POST
router.post('/register', registerController);
//getUserData || POST
router.post("/getUserData", authMiddlewares, getUserController);

module.exports = router;