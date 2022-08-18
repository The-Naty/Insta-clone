const AuthService = {};
const User = require("../Models/user");
const bcrypt = require("bcryptjs");
// const avatarPath = require("../Util/avatarPath");

AuthService.createUser = async (user) => {
  try {
    const userExists = await User.findOne({
      $or: [{ user_name: user.user_name }, { email: user.email }],
    });
    if (userExists) {
      return { error: "Username or Email already exists" };
    }

    const newUser = new User(user);

    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);

    await newUser.save();
    const token = newUser.generateAuthToken();

    return { newUser, token };
  } catch (error) {
    throw error;
  }
};

AuthService.userUpdate = async (id, user) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
AuthService.userLogin = async (user) => {
  try {
    const userInfo = await User.findOne({
      $or: [{ user_name: user.user_name }, { email: user.email }],
    });
    if (!userInfo) return { error: "User not valid" };
    const validPassword = await bcrypt.compare(
      user.password,
      userInfo.password
    );

    if (!validPassword) return { error: "Invalid password" };
    return userInfo;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = AuthService;
