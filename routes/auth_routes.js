const router = require("express").Router();
const controller = require("../controllers/auth_controllers")

router.get("/", controller.sign_in_page);

router.post("/signIn", controller.sign_in)

module.exports = router