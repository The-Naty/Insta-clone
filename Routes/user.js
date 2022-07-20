const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user");
const RequestValidator = require("../Middlewares/requestValidator");
const UserValidator = require("../Validations/user");
// const auth = require("../Middlewares/auth");

router.get("/", UserController.getAllUser);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
