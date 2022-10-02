const express = require("express");
const router = express.Router();
const ReactController = require("../Controllers/react");
const auth = require("../Middlewares/auth");

router.put("/follow", auth, ReactController.followUser);
router.put("/unfollow", auth, ReactController.unFollowUser);
router.put("/likePost", auth, ReactController.likePost);
router.post("/comment", auth, ReactController.commentPost);

module.exports = router;
