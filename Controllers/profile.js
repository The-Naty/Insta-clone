const ProfileService = require("../Services/profile");
const ProfileController = {};
const multer = require("multer");
const upload = multer({ dest: "../Public/Uploads" });
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

ProfileController.uploadPicture = async (req, res) => {
  try {
    upload.single("profile");
    res.status(200).json(`Done ${req.file}`);
  } catch (error) {
    console.log(error);
    res.status(400).send("fe moshkel");
  }
};

module.exports = ProfileController;
