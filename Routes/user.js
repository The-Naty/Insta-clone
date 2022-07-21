const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user");

router.get("/", UserController.getAllUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
