const PostService = {};
const Post = require("../Models/post");
const User = require("../Models/user");
const IMAGESPATH = "./public/uploads/images/";

PostService.getAllPost = async () => {
  try {
    const post = await Post.find();

    return post;
  } catch (error) {
    console.log(error);
    return { error: "Internal server error" };
  }
};

PostService.getMyPost = async (userId) => {
  try {
    const post = await Post.find({ owner_id: userId });

    if (post === null) return "No posts added yet !";
    return post;
  } catch (error) {
    console.log(error);
    return { error: "Internal server error" };
  }
};

PostService.forYou = async (userId, lastCreatedAt) => {
  try {
    const user = await User.findById(userId);

    let post = [];
    for (i = 0; i < user.following.length; i++) {
      let temp = await Post.find({ owner_id: user.following[i] });
      post.push(...temp);
    }
    post
      .find({ createdAt: { $lte: lastCreatedAt } })
      .limit(10)
      .sort("-createdAt");
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
    fs.unlinkSync(IMAGESPATH + post.image);
    return post;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = PostService;
