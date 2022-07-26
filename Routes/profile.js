const express = require("express");
const router = express.Router();
const ProfileController = require("../Controllers/profile");
const auth = require("../Middlewares/auth");

router.get("/me", auth, ProfileController.getMyInfo);
router.get("/:id", auth, ProfileController.getUserInfo);
router.put("/edit", auth, ProfileController.updateUser);
router.post("/upload", ProfileController.uploadPicture);

module.exports = router;
