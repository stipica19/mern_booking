const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/pocetna";

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: CLIENT_URL,
  })
);

router.get("/logout", (req, res) => {
  if (req.session) {
    // delete session object
    req.session.destroy((error) => {
      req.session = null;
      if (error) return next(error);

      res.send({ logout: true });
    });
  }
});
module.exports = router;
