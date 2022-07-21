const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      maxlength: 16,
      unique: true,
    },
    nickName: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 16,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.jwtPrivateKey);
  return token;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
