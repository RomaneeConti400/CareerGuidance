const Router = require('express')
const router = new Router()
const tasChangeController = require('../controllers/tasChangeController')

router.post('/', tasChangeController.create)
router.get('/', tasChangeController.getall)

module.exports = router