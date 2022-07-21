const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const jwtToken = req.header("Authorization");

  if (!jwtToken)
    return res.status(401).send("Access denied. No token provided.");
  token = jwtToken.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, process.env.jwtPrivateKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}

module.exports = auth;
