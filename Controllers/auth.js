const AuthService = require("../Services/auth");
const AuthController = {};

AuthController.createUser = async (req, res) => {
  try {
    const user = await AuthService.createUser(req.body);
    if (user.error) return res.status(400).send(user.error);

    await user.save();
    const token = user.generateAuthToken();

    res
      .status(200)
      .header("Authorization", token)
      .send(`${user.userName} is successfully registered`);
  } catch (error) {
    console.log(error);

    res.status(500).send({ message: "Internal server error" });
  }
};

AuthController.updateUser = async (req, res) => {
  try {
    const user = await AuthService.userUpdate(req.params.id, req.body);
    res.status(200).json("User is successfully updated");
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

AuthController.userLogin = async (req, res) => {
  try {
    const user = await AuthService.userLogin(req.body);
    if (user.error) return res.status(400).send(user.error);
    const token = user.generateAuthToken();
    res
      .status(200)
      .header("Authorization", token)
      .send(`${user.userName} logged in successfully!`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

// AuthController.getGoogleUser = async (req, res) => {
//   try {
//     passport.authenticate("google", {
//       scope: ["profile", "email"],
//       accessType: "offline",
//       prompt: "consent",
//       state: "secret-state",
//       hd: "example.com",
//       includeGrantedScopes: true,
//       session: false,
//       passReqToCallback: true,
//     })(req, res);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Internal server error" });
//   }
// };
// AuthController.getGoogleUserCallback = (req, res) => {
//   passport.authenticate("google", {
//     successRedirect: "http://localhost:5000/user/auth/google/callback",
//   });
// };
// AuthController.loginSuccess = (req, res) => {
//   req.Json({ message: "Authentication is successfull" });
// };

module.exports = AuthController;
