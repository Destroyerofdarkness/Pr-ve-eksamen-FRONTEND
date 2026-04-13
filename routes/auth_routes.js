const router = require("express").Router();
const controller = require("../controllers/auth_controllers");

router.get("/", controller.sign_in_page);

router.post("/signIn", controller.sign_in);

router.get("/cookie/:token", controller.make_cookie);

router.get("/logout", controller.logout);

module.exports = router;
