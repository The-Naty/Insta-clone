const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    owner_id: {
      type: String,
      required: true,
    },
    owner_name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    likes: {
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

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
