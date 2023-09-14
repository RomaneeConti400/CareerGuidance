const Router = require('express')
const router = new Router()
const testController = require('../controllers/testController')

router.post('/create', testController.create)
router.get('/getall', testController.getall)
router.get('/:id',)

module.exports = router