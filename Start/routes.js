const express = require("express");
const AuthRouter = require("../Routes/AuthRouter");

module.exports = function (app) {
  app.use(express.json());
  app.use("/auth", AuthRouter);
};
