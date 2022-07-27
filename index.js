const express = require("express");
const app = express();

require("dotenv").config();

require("./Start/routes")(app);
require("./Start/mongo")();

//Server Start
const port = process.env.PORT || 5000;
const server = app.listen(port, async () => {
  console.log(`Server started on port localhost:${port}`);
});

module.exports = server;
