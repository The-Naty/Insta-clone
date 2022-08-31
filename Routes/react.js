const express = require("express");
const router = express.Router();
const ReactController = require("../Controllers/react");
const auth = require("../Middlewares/auth");

router.post("/follow", auth, ReactController.followUser);
router.post("/unfollow", auth, ReactController.unFollowUser);

module.exports = router;
