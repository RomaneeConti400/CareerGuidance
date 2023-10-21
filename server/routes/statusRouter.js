import Router from 'express'
const router = new Router()
import statusController from '../controllers/statusController.js'

router.post('/create', statusController.create)
router.get('/getall', statusController.getall)

export default router