const express = require("express");
const router = express.Router();
const ProfileController = require("../Controllers/profile");
const auth = require("../Middlewares/auth");
const upload = require("../Middlewares/multer");

router.get("/me", auth, ProfileController.getMyInfo);
router.put("/edit", auth, ProfileController.updateUser);
// router.post("/upload", ProfileController.uploadPicture);
// router.get("/upload");
router.post(
  "/upload",
  [auth, upload.single("profile")],
  ProfileController.uploadPicture
);
router.get("/:id", auth, ProfileController.getUserInfo);
module.exports = router;
