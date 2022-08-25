const UserService = {};
const User = require("../Models/user");
const Post = require("../Models/post");
const fs = require("fs");
const IMAGESPATH = "./public/uploads/images/";

UserService.getAllUser = async () => {
  try {
    const user = await User.find().select("-password");

    return user;
  } catch (error) {
    console.log(error);
    return { error: "Internal server error" };
  }
};

UserService.deleteUser = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id);
    if (user) {
      const post = await Post.find({ owner_id: id });
      post.forEach((e) => {
        fs.unlinkSync(IMAGESPATH + e.image);
      });

      const deletedPost = await Post.deleteMany({ owner_id: id });
      console.log(deletedPost);
      console.log(`Deleted all posts for user ${user.user_name}`);
    }
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = UserService;
