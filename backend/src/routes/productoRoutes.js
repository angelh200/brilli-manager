import { Router } from 'express'
import { createProduct } from '../controllers/productoController.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = Router()

router.post('/', authMiddleware, createProduct)

export default router