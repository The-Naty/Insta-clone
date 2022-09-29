const ReactService = require("../Services/react");
const ReactController = {};

ReactController.followUser = async (req, res) => {
  try {
    const response = await ReactService.followUser(
      req.user._id,
      req.body.userId
    );

    if (response.error) return res.status(400).send(response.error);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

ReactController.unFollowUser = async (req, res) => {
  try {
    const response = await ReactService.unFollowUser(
      req.user._id,
      req.body.userId
    );

    if (response.error) return res.status(400).send(response.error);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

ReactController.likePost = async (req, res) => {
  try {
    const response = await ReactService.likePost();

    if (response.error) return res.status(400).send(response.error);
    res.status(200).send();
  } catch {
    res.status(500).send(error.message);
  }
};
module.exports = ReactController;
