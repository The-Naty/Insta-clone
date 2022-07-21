const UserService = require("../Services/user");
const UserController = {};

UserController.getAllUser = async (req, res) => {
  try {
    const user = await UserService.getAllUser();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

UserController.deleteUser = async (req, res) => {
  try {
    const user = await UserService.deleteUser(req.params.id);
    if (!user) return res.status(404).send({ message: "User not found" });
    res.status(200).send(`${user.userName} is successfully deleted`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = UserController;
