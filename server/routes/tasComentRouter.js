const Router = require('express')
const router = new Router()
const tasComentController = require('../controllers/tasComentController')

router.post('/', tasComentController.create)
router.get('/', tasComentController.getall)

module.exports = router