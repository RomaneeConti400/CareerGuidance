import Router from "express";
const router = new Router();
import roleController from "../controllers/roleController.js";

router.post("/create", roleController.create);
router.get("/getall", roleController.getall);
router.get("/getbyid/:id", roleController.getbyid);

export default router;
