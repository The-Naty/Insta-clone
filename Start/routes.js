const express = require("express");
const AuthRouter = require("../Routes/auth");
const UserRouter = require("../Routes/user");

module.exports = function (app) {
  app.use(express.json());
  app.use("/auth", AuthRouter);
  app.use("/user", UserRouter);
};
