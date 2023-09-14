const Router = require('express')
const router = new Router()
const projectController = require('../controllers/projectController')

router.post('/create', projectController.create)
router.get('/getall', projectController.getall)
router.get('/:id',)

module.exports = router