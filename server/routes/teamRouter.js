import Router from 'express'
const router = new Router()
import teamController from '../controllers/teamController.js'

router.post('/create', teamController.create)
router.get('/getall', teamController.getall)
router.get('/:id',)

export default router