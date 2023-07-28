const Router = require('express')
const router = new Router()
const testUserController = require('../controllers/testUserController')

router.post('/', testUserController.create)
router.get('/', testUserController.getall)

module.exports = router