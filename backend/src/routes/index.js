import { Router } from 'express'
import authRoutes from './authRoutes.js'
import productoRoutes from './productoRoutes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/producto', productoRoutes)

export default router