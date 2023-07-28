const Router = require('express')
const router = new Router()
const projectRequestController = require('../controllers/projectRequestController')

router.post('/', projectRequestController.create)
router.get('/', projectRequestController.getall)

module.exports = router