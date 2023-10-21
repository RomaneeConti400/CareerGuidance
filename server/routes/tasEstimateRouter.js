import Router from 'express'
const router = new Router()
import tasEstimateController from '../controllers/tasEstimateController.js'

router.post('/create', tasEstimateController.create)
router.get('/getall', tasEstimateController.getall)

export default router