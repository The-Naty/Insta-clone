const ReactService = require("../Services/react");
const ReactController = {};

ReactController.followUser = async (req, res) => {
  try {
    const respond = await ReactService.followUser(
      req.user._id,
      req.body.userId
    );

    res.status(200).send(respond);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

ReactController.unFollowUser = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = ReactController;
