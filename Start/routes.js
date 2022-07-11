const express = require("express");
const AuthRouter = require("../Routes/auth");
const user = require("../Routes/user");

module.exports = function (app) {
  app.use(express.json());
  app.use("/auth", AuthRouter);
  app.use("/user", user);
};
