const Router = require('express')
const router = new Router()
const projectTechnologyController = require('../controllers/projectTechnologyController')

router.post('/', projectTechnologyController.create)
router.get('/', projectTechnologyController.getall)

module.exports = router