const express = require("express");
const router = express.Router();
const ReactController = require("../Controllers/react");
const auth = require("../Middlewares/auth");

router.post("/follow", auth, ReactController.followUser);

module.exports = router;
