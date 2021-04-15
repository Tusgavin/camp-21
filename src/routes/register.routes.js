const router = require("express").Router();
const { registerController } = require("../controllers");

router.post("/create-user", registerController.createUser);

module.exports.register = router;
