const express = require("express");
const router = express.Router();
const ProfileController = require("../Controllers/profile");
const auth = require("../Middlewares/auth");
const upload = require("../Middlewares/multer");

router.get("/me", auth, ProfileController.getMyInfo);
router.put("/edit", auth, ProfileController.updateUser);
router.put(
  "/upload",
  [auth, upload.single("profile")],
  ProfileController.uploadPicture
);
router.delete("/avatar", auth, ProfileController.deleteAvatar);
router.get("/:id", auth, ProfileController.getUserInfo);
module.exports = router;
