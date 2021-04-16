const router = require("express").Router();
const { adminController } = require("../controllers");
const { isAuthAdministrator } = require("../middlewares");

router.use(isAuthAdministrator);

router.patch("/make-admin", adminController.makeAdmin);
router.post("/make-admin", adminController.createAdmin);

router.post("/create-film", adminController.createFilm);
router.patch("/edit-film", adminController.editFilm);
router.delete("/delete-film", adminController.deleteFilm);

module.exports.admin = router;
