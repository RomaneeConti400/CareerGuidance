const Router = require('express')
const router = new Router()
const tasEstimateController = require('../controllers/tasEstimateController')

router.post('/create', tasEstimateController.create)
router.get('/getall', tasEstimateController.getall)

module.exports = router