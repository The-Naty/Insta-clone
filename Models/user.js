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
      lowercase: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    profile_picture: {
      type: String,
    },
    bio: { type: String, maxlength: 150 },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    dateOfBirth: {
      type: Date,
      required: true,
      trim: true,
    },
    posts: {
      type: Number,
    },
    following: {
      type: Number,
    },
    follower: {
      type: Number,
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
