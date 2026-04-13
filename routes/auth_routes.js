const router = require("express").Router();
const controller = require("../controllers/auth_controllers")

router.get("/", controller.sign_in_page);



module.exports = router