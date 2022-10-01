const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    owner_id: {
      type: String,
      required: true,
    },
    owner_name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    likes: {
      type: Array,
      default: 0,
    },
    comments: {
      type: Number,
      default: 0,
    },
    tags: {
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

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
