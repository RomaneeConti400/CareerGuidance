const Router = require("express");
const router = new Router();
const roleController = require("../controllers/roleController");

router.post("/create", roleController.create);
router.get("/getall", roleController.getall);
router.get("/getbyid", roleController.getbyid);

module.exports = router;
