const Router = require('express')
const router = new Router()
const testUserController = require('../controllers/testUserController')

router.post('/create', testUserController.create)
router.get('/getall', testUserController.getall)

module.exports = router