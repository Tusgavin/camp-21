const router = require("express").Router();
const { authController } = require("../controllers");

router.post("/create-user", authController.createUser);
router.post("/signin", authController.signin);

module.exports.auth = router;
