import Router from 'express'
const router = new Router()
import professionController from '../controllers/professionController.js'

router.post('/create', professionController.create)
router.get('/getall', professionController.getall)

export default router