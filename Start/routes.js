const express = require("express");
const ProfileRouter = require("../Routes/profile");
const AuthRouter = require("../Routes/auth");
const UserRouter = require("../Routes/user");

module.exports = function (app) {
  app.use("/public", express.static("public"));
  app.use(express.json());
  app.use("/profile", ProfileRouter);
  app.use("/auth", AuthRouter);
  app.use("/user", UserRouter);
};
