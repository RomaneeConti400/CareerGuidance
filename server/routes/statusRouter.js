const Router = require('express')
const router = new Router()
const statusController = require('../controllers/statusController')

router.post('/create', statusController.create)
router.get('/getall', statusController.getall)

module.exports = router