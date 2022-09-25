const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
      maxlength: 16,
      unique: true,
    },
    nick_name: {
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
    user_avatar: {
      type: String,
      default: "profile-default.jpg",
    },
    bio: { type: String, maxlength: 150 },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    date_of_birth: {
      type: Date,
    },
    phone_number: {
      type: String,
      match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    },
    posts: {
      type: Number,
      default: 0,
    },
    following: {
      type: Array,
    },
    follower: {
      type: Array,
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
  return jwt.sign({ _id: this._id }, process.env.jwtPrivateKey);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
