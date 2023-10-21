import { Router } from 'express';
const router = Router();

import projectRouter from './projectRouter.js'
import roleRouter from './roleRouter.js'
import teamRouter from './teamRouter.js'
import testRouter from './testRouter.js'
import userRouter from './userRouter.js'
import professionRouter from './professionRouter.js'
import projectProfessionRouter from './projectProfessionRouter.js'
import projectRequestRouter from './projectRequestRouter.js'
import projectTechnologyRouter from './projectTechnologyRouter.js'
import statusRouter from './statusRouter.js'
import tasChangeRouter from './tasChangeRouter.js'
import tasComentRouter from './tasComentRouter.js'
import tasEstimateRouter from './tasEstimateRouter.js'
import taskRouter from './taskRouter.js'
import technologyRouter from './technologyRouter.js'
import testUserRouter from './testUserRouter.js'

router.use('/project', projectRouter)
router.use('/role', roleRouter)
router.use('/team', teamRouter)
router.use('/test', testRouter)
router.use('/user', userRouter)
router.use('/profession', professionRouter)
router.use('/projectProfession', projectProfessionRouter)
router.use('/projectRequest', projectRequestRouter)
router.use('/projectTechnology', projectTechnologyRouter)
router.use('/status', statusRouter)
router.use('/tasChange', tasChangeRouter)
router.use('/tasComent', tasComentRouter)
router.use('/tasEstimate', tasEstimateRouter)
router.use('/task', taskRouter)
router.use('/technology', technologyRouter)
router.use('/testUser', testUserRouter)


export default router;