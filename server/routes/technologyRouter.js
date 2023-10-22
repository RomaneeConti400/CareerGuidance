import Router from 'express'
const router = new Router()
import technologyController from '../controllers/technologyController.js'

router.post('/create', technologyController.create)
router.get('/getall', technologyController.getall)

export default router