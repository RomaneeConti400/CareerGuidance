const Router = require('express')
const router = new Router()
const technologyController = require('../controllers/technologyController')

router.post('/create', technologyController.create)
router.get('/getall', technologyController.getall)

module.exports = router