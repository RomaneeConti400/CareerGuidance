import Router from 'express'
const router = new Router()
import projectProfessionController from '../controllers/projectProfessionController.js'

router.post('/create', projectProfessionController.create)
router.get('/getall', projectProfessionController.getall)

export default router