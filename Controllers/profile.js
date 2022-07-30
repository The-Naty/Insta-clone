const ProfileService = require("../Services/profile");
const ProfileController = {};

ProfileController.getUserInfo = async (req, res) => {
  try {
    const userInfo = await ProfileService.getUserInfo(req.params.id);

    res.status(200).send(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

ProfileController.getMyInfo = async (req, res) => {
  try {
    const myInfo = await ProfileService.getMyInfo(req.user._id);

    res.status(200).send(myInfo);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

ProfileController.updateUser = async (req, res) => {
  try {
    const response = await ProfileService.userUpdate(req.user._id, req.body);

    if (response.error) return res.status(400).send(response.error);
    res.status(200).send(response);
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

    res.status(200).send(req.file);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

ProfileController.deleteAvatar = async (req, res) => {
  try {
    const response = await ProfileService.deleteAvatar(req.user._id);
    if (response.error) return res.status(400).send(response.error);

    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

module.exports = ProfileController;
