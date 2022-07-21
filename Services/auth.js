const AuthService = {};
const User = require("../Models/user");
const bcrypt = require("bcryptjs");

AuthService.createUser = async (user) => {
  try {
    const newUser = new User(user);
    const savedUser = await newUser.save();

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    return savedUser;
  } catch (error) {
    if (user.userName === error.keyValue.userName)
      return { error: "Username already exists" };
    if (user.email === error.keyValue.email)
      return { error: "Email already exists" };
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
      $or: [{ userName: user.userName }, { email: user.email }],
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
