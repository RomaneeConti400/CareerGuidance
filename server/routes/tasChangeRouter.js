import Router from 'express'
const router = new Router()
import tasChangeController from '../controllers/tasChangeController.js'

router.post('/create', tasChangeController.create)
router.get('/getall', tasChangeController.getall)

export default router