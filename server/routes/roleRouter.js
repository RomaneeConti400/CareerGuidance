const Router = require('express')
const router = new Router()
const roleController = require('../controllers/roleController')

router.post('/create', roleController.create)
router.get('/getall', roleController.getall)

module.exports = router