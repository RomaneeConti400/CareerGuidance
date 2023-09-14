const Router = require('express')
const router = new Router()
const projectProfessionController = require('../controllers/projectProfessionController')

router.post('/create', projectProfessionController.create)
router.get('/getall', projectProfessionController.getall)

module.exports = router