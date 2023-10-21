import Router from 'express'
const router = new Router()
import projectRequestController from '../controllers/projectRequestController.js'

router.post('/create', projectRequestController.create)
router.get('/getall', projectRequestController.getall)

export default router