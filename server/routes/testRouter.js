import Router from "express";
const router = new Router();
import testController from "../controllers/testController.js";

router.post("/create", testController.create);
router.get("/getall", testController.getall);
router.get("/getbyid/:id", testController.getbyid);
router.get("/gettestcontentbyid/:id", testController.gettestcontentbyid);
router.get("/fill", testController.fill);
router.post("/postuserresult", testController.postuserresult);

export default router;
