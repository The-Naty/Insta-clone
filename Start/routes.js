const express = require("express");
const ProfileRouter = require("../Routes/profile");
const AuthRouter = require("../Routes/auth");
const UserRouter = require("../Routes/user");
const PostRouter = require("../Routes/post");
const ReactRouter = require("../Routes/react");

module.exports = function (app) {
  app.use("/public", express.static("public"));
  app.use(express.json());
  app.use("/profile", ProfileRouter);
  app.use("/auth", AuthRouter);
  app.use("/user", UserRouter);
  app.use("/post", PostRouter);
  app.use("/react", ReactRouter);
};
