const ReactService = {};
const User = require("../Models/user");

ReactService.followUser = async (followerId, followedId) => {
  try {
    if (!followedId) return { error: "wrong user ID" };
    const followedUser = await User.findById(followedId).select("-password");
    const followerUser = await User.findById(followerId).select("-password");

    for (let i = 0; i < followedUser.follower.length; i++) {
      if (followedUser.follower[i] === followerId) {
        return { error: `You already following ${followedUser.nick_name}` };
      }
    }
    if (!followedUser)
      return { error: `User ${followedUser.nick_name} does not exist` };
    if (!followerUser)
      return { error: `User ${followerUser.nick_name} does not exist` };

    followedUser.follower.push(followerId);
    followerUser.following.push(followedId);

    followedUser.save();
    followerUser.save();

    return { message: `You are now following ${followedUser.nick_name}` };
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

ReactService.unFollowUser = async (followerId, followedId) => {
  try {
    if (!followedId) return { error: "wrong user ID" };
    const followedUser = await User.findById(followedId).select("-password");
    const followerUser = await User.findById(followerId).select("-password");

    for (let i = 0; i < followedUser.follower.length; i++) {
      if (followedUser.follower[i] === followerId) {
        return { error: `You already following ${followedUser.nick_name}` };
      }
    }
    if (!followedUser)
      return { error: `User ${followedUser.nick_name} does not exist` };
    if (!followerUser)
      return { error: `User ${followerUser.nick_name} does not exist` };

    followedUser.follower.push(followerId);
    followerUser.following.push(followedId);

    followedUser.save();
    followerUser.save();

    return { message: `You are now following ${followedUser.nick_name}` };
  } catch (error) {}
};

module.exports = ReactService;
