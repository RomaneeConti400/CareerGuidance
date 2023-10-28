import Router from "express"
const router = new Router();
import testController from "../controllers/testController.js"

router.post("/create", testController.create);
router.get("/getall", testController.getall);
router.get("/fill", testController.fill);
router.post("/postuserresult", testController.postuserresult);

export default router;
