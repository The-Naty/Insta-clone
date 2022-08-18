const PostService = require("../Services/post");
const PostController = {};

PostController.getAllPost = async (req, res) => {
  try {
    const post = await PostService.getAllPost();
    res.status(200).send(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
module.exports = PostController;
