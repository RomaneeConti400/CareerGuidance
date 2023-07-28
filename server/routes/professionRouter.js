const Router = require('express')
const router = new Router()
const professionController = require('../controllers/professionController')

router.post('/', professionController.create)
router.get('/', professionController.getall)

module.exports = router