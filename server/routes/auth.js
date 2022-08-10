const express = require('express');
const router = express.Router();

const { Login, CreateAccount } = require('../controllers/auth');

router.route("/login").post(Login);
router.route("/create-account").post(CreateAccount);

module.exports = router