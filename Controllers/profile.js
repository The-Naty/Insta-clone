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
    const response = await ProfileService.userUpdate(req.user._id, req.body);

    if (response.error) return res.status(400).send(response.error);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

ProfileController.uploadPicture = async (req, res) => {
  try {
    const response = await ProfileService.uploadAvatar(
      req.user._id,
      req.file.filename
    );

    if (response.error) return res.status(400).send(response.error);

    res.send(req.file);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = ProfileController;
