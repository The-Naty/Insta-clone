const ProfileService = require("../Services/profile");
const ProfileController = {};

ProfileController.getUserInfo = async (req, res) => {
  try {
    const userInfo = await ProfileService.getUserInfo(req.params.id);

    res.status(200).json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

ProfileController.getMyInfo = async (req, res) => {
  try {
    const myInfo = await ProfileService.getMyInfo(req.user._id);

    res.status(200).json(myInfo);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

ProfileController.updateUser = async (req, res) => {
  try {
    const user = await ProfileService.userUpdate(req.user._id, req.body);
    res.status(200).json("User is successfully updated");
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = ProfileController;
