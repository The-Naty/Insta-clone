const express = require("express");
const router = express.Router();
const AuthController = require("../Controllers/auth");
const RequestValidator = require("../Middlewares/requestValidator");
const UserValidator = require("../Validations/createUser");

router.post(
  "/signup",
  RequestValidator.validate(UserValidator.createUser),
  AuthController.createUser
);
router.post("/login", AuthController.userLogin);

module.exports = router;
