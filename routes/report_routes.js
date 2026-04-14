const router = require("express").Router();
const controller = require("../controllers/report_controllers");
const {authenticate} = require("../middleware/authenticate");
const authorize=require("../middleware/authorize")


router.get("/publiser",authenticate ,controller.report_publish_page);

router.post("/publiser", authenticate, controller.report_publish)

router.get("/alle", authenticate, controller.all_report_page)

router.put("/oppdater",authorize ,controller.report_update);

router.delete("/slett", authorize, controller.report_delete)

module.exports = router