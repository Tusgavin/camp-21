const router = require("express").Router();
const { adminController } = require("../controllers");
const { isAuthAdministrator } = require("../middlewares");

router.use(isAuthAdministrator);

router.patch("/make-admin", adminController.makeAdmin);
router.post("/make-admin", adminController.createAdmin)

module.exports.admin = router;
