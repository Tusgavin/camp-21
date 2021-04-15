const router = require("express").Router();
const { adminController } = require("../controllers");

// CERTIFICAR QUE QUEM ESTÀ FAZENDO CHAMADA È ADMINISRADOR

router.patch("/make-admin", adminController.makeAdmin);
router.post("/make-admin", adminController.createAdmin)

module.exports.admin = router;
