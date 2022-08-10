const express = require('express');
const router = express.Router();

const { GetRoom } = require('../controllers/rooms');

router.route("/:roomID").get(GetRoom);

module.exports = router;