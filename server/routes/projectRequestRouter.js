const Router = require('express')
const router = new Router()
const projectRequestController = require('../controllers/projectRequestController')

router.post('/create', projectRequestController.create)
router.get('/getall', projectRequestController.getall)

module.exports = router