const Router = require('express')
const router = new Router()
const tasChangeController = require('../controllers/tasChangeController')

router.post('/create', tasChangeController.create)
router.get('/getall', tasChangeController.getall)

module.exports = router