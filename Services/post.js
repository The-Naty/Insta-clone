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

PostService.uploadPost = async (userId, fileName) => {
  try {
    const user = await User.findById(userId);
    if (user.user_avatar != "default.jpg") {
      fs.unlinkSync(userAvatarPath + user.user_avatar);
    }
    const updatedUser = await User.findByIdAndUpdate(userId, {
      user_avatar: fileName,
    });
    return updatedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = PostService;
