const ReactService = require("../Services/react");
const ReactController = {};

ReactController.followUser = async (req, res) => {
  try {
    const respond = await ReactService.followUser(req);

    res.status(200).send(respond);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = ReactController;
