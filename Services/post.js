const PostService = {};
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

PostService.uploadPost = async (userId, fileName, title) => {
  try {
    const newPost = new Post();
    newPost.owner_id = userId;
    newPost.image = fileName;
    newPost.title = title;

    const savedPost = await newPost.save();

    return savedPost;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

PostService.deletePost = async (id) => {
  try {
    const post = await Post.findByIdAndDelete(id);
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = PostService;
