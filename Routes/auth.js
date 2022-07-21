const express = require("express");
const router = express.Router();
const AuthController = require("../Controllers/auth");
const RequestValidator = require("../Middlewares/requestValidator");
const UserValidator = require("../Validations/user");
const auth = require("../Middlewares/auth");

router.post(
  "/signup",
  RequestValidator.validate(UserValidator.createUser),
  AuthController.createUser
);
router.post("/login", auth, AuthController.userLogin);

module.exports = router;
