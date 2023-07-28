const Router = require('express')
const router = new Router()
const taskController = require('../controllers/taskController')

router.post('/', taskController.create)
router.get('/', taskController.getall)

module.exports = router