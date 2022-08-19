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

PostController.uploadPicture = async (req, res) => {
  try {
    const response = await PostService.uploadPost(
      req.user._id,
      req.file.filename
    );

    if (response.error) return res.status(400).send(response.error);

    res.status(200).send(req.file);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};
module.exports = PostController;
