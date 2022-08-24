const express = require("express");
const router = express.Router();
const PostController = require("../Controllers/post");
const auth = require("../Middlewares/auth");
const upload = require("../Middlewares/multer");

router.get("/", PostController.getAllPost);
router.post(
  "/upload",
  [auth, upload.single("post")],
  PostController.uploadPicture
);
router.delete("/:id", PostController.deletePost);

module.exports = router;
