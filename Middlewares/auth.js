const jwt = require("jsonwebtoken");
const User = require("../Models/user");

async function auth(req, res, next) {
  try {
    const jwtToken = req.header("Authorization");

    if (!jwtToken)
      return res.status(401).send("Access denied. No token provided.");
    token = jwtToken.replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.jwtPrivateKey);
    const isValid = await User.findOne({ _id: decoded._id }).exec();

    if (!isValid) return res.status(401).send("Access denied. Token expired.");
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}

module.exports = auth;
