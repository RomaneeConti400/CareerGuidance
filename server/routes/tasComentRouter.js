const Router = require('express')
const router = new Router()
const tasComentController = require('../controllers/tasComentController')

router.post('/create', tasComentController.create)
router.get('/getall', tasComentController.getall)

module.exports = router