const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/dashboard", ensureAuth, async (req, res) => {
  console.log("-----", req.user);
  res.json(req.user);
});

module.exports = router;
