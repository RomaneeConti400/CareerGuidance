const Router = require('express')
const router = new Router()

const projectRouter = require('./projectRouter')
const roleRouter = require('./roleRouter')
const teamRouter = require('./teamRouter')
const testRouter = require('./testRouter')
const userRouter = require('./userRouter')

router.use('/project', projectRouter)
router.use('/role', roleRouter)
router.use('/team', teamRouter)
router.use('/test', testRouter)
router.use('/user', userRouter)

module.exports = router