const ProfileService = {};
const User = require("../Models/user");
const fs = require("fs");
const IMAGESPATH = "./public/uploads/images/";

ProfileService.getUserInfo = async (id) => {
  try {
    const user = await User.findById(id).select("-password");

    if (!user) return { error: "User does not exist" };

    user.user_avatar = IMAGESPATH + user.user_avatar;

    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

ProfileService.getMyInfo = async (id) => {
  try {
    const myInfo = await User.findById(id).select("-password");

    if (!myInfo) return { error: "User does not exist" };

    myInfo.user_avatar = IMAGESPATH + myInfo.user_avatar;

    console.log(myInfo);
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
    const user = await User.findById(userId);
    if (user.user_avatar != "default.jpg") {
      fs.unlinkSync(IMAGESPATH + user.user_avatar);
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

ProfileService.deleteAvatar = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (user.user_avatar != "default.jpg") {
      fs.unlinkSync(IMAGESPATH + user.user_avatar);

      const updatedUser = await User.findByIdAndUpdate(userId, {
        user_avatar: "default.jpg",
      });

      return updatedUser;
    } else {
      return "User avatar already set to default";
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = ProfileService;
