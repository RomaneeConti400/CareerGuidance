import Router from 'express'
const router = new Router()
import testUserController from '../controllers/testUserController.js'

router.post('/create', testUserController.create)
router.get('/getall', testUserController.getall)

export default router