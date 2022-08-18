const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    owner_id: {
      type: ObjectId,
      required: true,
    },
    title: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: Number,
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
