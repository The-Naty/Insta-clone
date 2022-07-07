const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/user");

router.get("/:id", auth, UserController.getUserInfo);
router.get("/", auth, admin, UserController.getAllUser);

router.post(
  "/signup",
  RequestValidator.validate(UserValidator.createUser),
  UserController.createUser
);
router.post("/login", UserController.userLogin);
router.put("/:id", auth, admin, UserController.updateUser);
router.delete("/:id", auth, admin, UserController.deleteUser);
router.get("/auth/google", UserController.getGoogleUser);
router.get("/auth/google/callback", UserController.getGoogleUserCallback);
router.get("/login/success", UserController.loginSuccess);

router.get("/", function (req, res) {
  res.render("index.ejs"); // load the index.ejs file
});

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    scope: ["public_profile", "email"],
  })
);

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  }),
  function (req, res) {
    if (req.isAuthenticated()) return next();
    res.redirect("/");
  }
);

module.exports = router;
