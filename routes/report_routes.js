const router = require("express").Router();
const controller = require("../controllers/report_controllers");
const authenticate = require("../middleware/authenticate")


router.get("/publiser",authenticate ,controller.report_publish_page);

router.post("/publiser", authenticate, controller.report_publish)

module.exports = router