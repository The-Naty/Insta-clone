const ProfileService = {};
const User = require("../Models/user");

ProfileService.getUserInfo = async (id) => {
  try {
    const user = User.findById(id).select("-password");
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

ProfileService.getMyInfo = async (id) => {
  try {
    const myInfo = User.findById(id).select("-password");
    return myInfo;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

ProfileService.userUpdate = async (id, user) => {
  try {
    const userExists = await User.findOne({
      $or: [{ user_name: user.user_name }, { email: user.email }],
    });
    if (userExists) {
      return { error: "Username or Email already exists" };
    }

    const updatedUser = await User.findByIdAndUpdate(id, user, {
      new: true,
    }).select("-password");
    return updatedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

ProfileService.uploadAvatar = async (userId, fileName) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, {
      user_avatar: fileName,
    });
    return updatedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = ProfileService;
