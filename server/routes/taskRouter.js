const Router = require('express')
const router = new Router()
const taskController = require('../controllers/taskController')

router.post('/create', taskController.create)
router.get('/getall', taskController.getall)

module.exports = router