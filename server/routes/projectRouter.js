import Router from 'express'
const router = new Router()
import projectController from '../controllers/projectController.js'

router.post('/create', projectController.create)
router.get('/getall', projectController.getall)
router.get('/:id',)

export default router