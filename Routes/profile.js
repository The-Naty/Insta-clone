const express = require("express");
const router = express.Router();
const ProfileController = require("../Controllers/profile");
const auth = require("../Middlewares/auth");

router.get("/me", auth, ProfileController.getMyInfo);
router.get("/:id", auth, ProfileController.getUserInfo);
router.put("/:id", auth, ProfileController.updateUser);

module.exports = router;
