const Router = require('express')
const router = new Router()
const technologyController = require('../controllers/technologyController')

router.post('/', technologyController.create)
router.get('/', technologyController.getall)

module.exports = router