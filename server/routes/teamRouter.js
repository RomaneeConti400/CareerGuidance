const Router = require('express')
const router = new Router()
const teamController = require('../controllers/teamController')

router.post('/create', teamController.create)
router.get('/getall', teamController.getall)
router.get('/:id',)

module.exports = router