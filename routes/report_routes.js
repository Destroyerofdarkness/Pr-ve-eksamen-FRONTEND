const router = require("express").Router();
const controller = require("../controllers/report_controllers");

router.get("/publiser", controller.report_publish_page)

module.exports = router