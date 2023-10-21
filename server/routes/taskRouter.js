import Router from 'express'
const router = new Router()
import taskController from '../controllers/taskController.js'

router.post('/create', taskController.create)
router.get('/getall', taskController.getall)

export default router