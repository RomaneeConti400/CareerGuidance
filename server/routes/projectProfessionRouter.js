const Router = require('express')
const router = new Router()
const projectProfessionController = require('../controllers/projectProfessionController')

router.post('/', projectProfessionController.create)
router.get('/', projectProfessionController.getall)

module.exports = router