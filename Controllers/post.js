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
      req.file.filename,
      req.body.title
    );

    if (response.error) return res.status(400).send(response.error);

    res.status(200).send(req.file);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

PostController.deletePost = async (req, res) => {
  try {
    const post = await PostService.deletePost(req.params.id);
    console.log(post);
    if (!post) return res.status(404).send({ message: "Post not found" });
    res.status(200).send(`Post is successfully deleted`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};
module.exports = PostController;
