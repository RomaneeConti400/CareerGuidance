import Router from "express"
const router = new Router();
import testController from "../controllers/testController.js"

router.post("/create", testController.create);
router.get("/getall", testController.getall);
// router.get('/:id',)
router.post("/gettestresult", testController.gettestresult);

export default router;
