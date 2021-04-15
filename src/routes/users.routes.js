const router = require("express").Router();
const { usersController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.get("/", usersController.list);
router.patch("/edit", usersController.edit);
router.delete("/delete", usersController.delete);

module.exports.users = router;
