const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`Connected to MongoDb...`))
    .catch((error) => console.log(error));
};
