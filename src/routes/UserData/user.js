
const express = require('express');
const router = express.Router();
const { onboardUser } = require("../../controllers/user/onboard")

router.route("/onboardUser").post(onboardUser);


module.exports = router;
