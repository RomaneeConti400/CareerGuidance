const Router = require('express')
const router = new Router()
const projectTechnologyController = require('../controllers/projectTechnologyController')

router.post('/create', projectTechnologyController.create)
router.get('/getall', projectTechnologyController.getall)

module.exports = router