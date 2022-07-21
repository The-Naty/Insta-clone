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

module.exports = ProfileService;
