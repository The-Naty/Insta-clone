const UserService = {};
const User = require("../Models/user");

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
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = UserService;
