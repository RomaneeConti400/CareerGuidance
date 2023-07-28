const Router = require('express')
const router = new Router()
const tasEstimateController = require('../controllers/tasEstimateController')

router.post('/', tasEstimateController.create)
router.get('/', tasEstimateController.getall)

module.exports = router