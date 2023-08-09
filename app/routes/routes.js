const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/login", auth.getCaptchVerificationScore);

module.exports = router;
