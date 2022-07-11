const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user");
// const auth = require("../Middlewares/auth");

router.get("/", auth, admin, UserController.getAllUser);
router.delete("/:id", auth, admin, UserController.deleteUser);

module.exports = router;
