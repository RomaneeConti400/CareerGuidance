import Router from "express";
const router = new Router();
import authMiddleware from "../middleware/authMiddleware.js"
import testUserController from "../controllers/testUserController.js";

router.post("/create", testUserController.create);
router.get("/getall", testUserController.getall);
router.get("/getbytestid/:id",authMiddleware, testUserController.getbytestid);

export default router;
