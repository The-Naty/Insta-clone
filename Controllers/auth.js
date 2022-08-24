const AuthService = require("../Services/auth");
const AuthController = {};

AuthController.createUser = async (req, res) => {
  try {
    const response = await AuthService.createUser(req.body);
    if (response.error) return res.status(400).send(response.error);

    res
      .status(200)
      .header("Authorization", response.token)
      .send(`${response.newUser.user_name} is successfully registered`);
  } catch (error) {
    console.log(error);

    res.status(500).send({ message: "Internal server error" });
  }
};

AuthController.userLogin = async (req, res) => {
  try {
    const user = await AuthService.userLogin(req.body);
    if (user.error) return res.status(400).send(user.error);

    res
      .status(200)
      .header("Authorization", user.token)
      .send(`${user.userInfo.user_name} logged in successfully!`);
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
