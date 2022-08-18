const express = require("express");
const router = express.Router();
const PostController = require("../Controllers/post");

router.get("/", PostController.getAllPost);
// router.delete("/:id", PostController.deleteUser);

module.exports = router;
