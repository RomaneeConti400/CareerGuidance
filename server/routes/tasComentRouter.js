import Router from 'express'
const router = new Router()
import tasComentController from '../controllers/tasComentController.js'

router.post('/create', tasComentController.create)
router.get('/getall', tasComentController.getall)

export default router