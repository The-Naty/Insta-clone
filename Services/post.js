const PostService = {};
const Post = require("../Models/post");

PostService.getAllPost = async () => {
  try {
    const post = await Post.find().select("-password");

    return post;
  } catch (error) {
    console.log(error);
    return { error: "Internal server error" };
  }
};

module.exports = PostService;
