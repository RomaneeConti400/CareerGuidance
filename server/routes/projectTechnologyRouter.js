import Router from 'express'
const router = new Router()
import projectTechnologyController from '../controllers/projectTechnologyController.js'

router.post('/create', projectTechnologyController.create)
router.get('/getall', projectTechnologyController.getall)

export default router