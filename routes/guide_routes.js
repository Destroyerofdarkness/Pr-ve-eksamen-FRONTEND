const router = require("express").Router();
const controller = require("../controllers/guide_controllers");


router.get("/brukerveiledning", controller.render_guide);


module.exports = router