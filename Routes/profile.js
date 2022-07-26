const express = require("express");
const router = express.Router();
const ProfileController = require("../Controllers/profile");
const auth = require("../Middlewares/auth");
const multer = require("multer");
const upload = multer({ dest: "./Public/Uploads" });

router.get("/me", auth, ProfileController.getMyInfo);
router.get("/:id", auth, ProfileController.getUserInfo);
router.put("/edit", auth, ProfileController.updateUser);
// router.post("/upload", ProfileController.uploadPicture);
router.post("/upload", upload.single("profile"), (req, res) => {
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});
module.exports = router;
