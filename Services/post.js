const PostService = {};
const User = require("../Models/user");
const Post = require("../Models/post");

PostService.getAllPost = async () => {
  try {
    const post = await Post.find();

    return post;
  } catch (error) {
    console.log(error);
    return { error: "Internal server error" };
  }
};

PostService.uploadPost = async (userId, fileName) => {
  try {
    const newPost = new Post();
    newPost.owner_id = userId;
    newPost.image = fileName;
    newPost.title = req.body.title;

    const savedPost = await newPost.save();

    return savedPost;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = PostService;
