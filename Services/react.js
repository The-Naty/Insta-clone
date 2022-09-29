const ReactService = {};
const User = require("../Models/user");
const Post = require("../Models/post");

ReactService.followUser = async (followerId, followedId) => {
  try {
    if (!followedId || followerId === followedId)
      return { error: "wrong user ID" };

    const followedUser = await User.findById(followedId).select("-password");
    const followerUser = await User.findById(followerId).select("-password");

    if (!followedUser) return { error: `User does not exist` };
    if (!followerUser) return { error: `User does not exist` };

    for (let i = 0; i < followedUser.follower.length; i++) {
      if (
        followedUser.follower[i] === followerId ||
        followerUser.following[i] === followedId
      ) {
        return { error: `You already following ${followedUser.nick_name}` };
      }
    }

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
    if (!followedId) return { error: "user ID not found" };
    const followedUser = await User.findById(followedId);
    const followerUser = await User.findById(followerId);

    const followerIndex = followedUser.follower.indexOf(followerId);
    const followedIndex = followerUser.following.indexOf(followedId);

    if (followerIndex > -1 && followedIndex > -1) {
      followedUser.follower.splice(followerIndex, 1);
      followerUser.following.splice(followedIndex, 1);
    } else {
      return {
        error: `You already unfollowing this ${followedUser.nick_name}`,
      };
    }

    await followedUser.save();
    await followerUser.save();

    return { message: `You are now unfollowing ${followedUser.nick_name}` };
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

ReactService.likePost = async (userId, postId) => {
  try {
    const post = await Post.findByIdAndUpdate(postId, likes.push(userId));

    if (!post) throw Error;

    return { message: `liked` };
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = ReactService;
