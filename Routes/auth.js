const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user");
const RequestValidator = require("../Middlewares/requestValidator");
const UserValidator = require("../Validations/user");
const auth = require("../Middlewares/auth");

router.get("/:id", auth, UserController.getUserInfo);
router.post(
  "/signup",
  RequestValidator.validate(UserValidator.createUser),
  UserController.createUser
);
router.post("/login", UserController.userLogin);
router.put("/:id", auth, UserController.updateUser);

module.exports = router;
